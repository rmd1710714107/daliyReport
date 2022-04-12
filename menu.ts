import inquirer from "inquirer";
import operateData from "./dataBase/index";
import {dataType} from "./dataBase/types"
import {handlePath,timetamp} from "./utils"

let question=[
    {
        type: 'input',
        name: 'dutyName',
        message: "请输入任务名称"
    },
    {
        type: 'input',
        name: 'path',
        message: "请输入文件夹地址"
    },
    {
        type: 'input',
        name: 'branch',
        message: "请输入分支"
    },
    {
        type: 'input',
        name: 'outPath',
        message: "请输入文件输出地址"
    },
    {
        type: 'input',
        name: 'isExit',
        message: "是否继续添加(Y/N)"
    },
];
async function create(){
    let isLoop:boolean=true;
    let dutyList:dataType[]=[];
    while(isLoop){
        let res:dataType=await inquirer.prompt(question);
        if (res.isExit==="N") isLoop=false;
        delete res.isExit;
        res.path=handlePath(res.path);
        res.outPath=handlePath(res.outPath);
        res.fileName=timetamp()+res.dutyName;
        dutyList.push(res);
    }
    operateData.insertRecord(dutyList);
}
async function query(){
    let res=await operateData.query();
    console.log(res);
}
async function deleteData() {
    let res=await inquirer.prompt([
        {
            type: 'input',
            name: 'isConfirmed',
            message: "是否确认删除任务(Y/N)"
        }
    ])
    if (res.isConfirmed==="N") {
        console.log("已取消删除");
        return;
    }
    let delNum=await operateData.delete();
    console.log(`${delNum}条数据已被删除`);
}
export {
    create,
    query,
    deleteData
}