const inquirer = require('inquirer');
import {create,query,deleteData} from "./menu";
import intervalDuty from "./schedule"
async function init(){
    let menuMap=new Map([
        ["新增任务","create"],
        ["显示任务","list"],
        ["清空任务","clear"],
        ["启动任务","startUp"]
    ])
    let menu=[
        {
            type:"list",
            message:"请选择操作",
            name:"operation",
            default:"list",
            choices:[
                "启动任务",
                "新增任务",
                "显示任务",
                "清空任务"
                
            ],
            filter: function (val:any) { // 使用filter将值变为大写
                return menuMap.get(val);
            }
            
        }
    ]
    let res=await inquirer.prompt(menu);
    switch(res.operation){
        case "create":
            create();
        break;
        case "list":
            query();
        break;
        case "clear":
            deleteData();
        break;
        case "startUp":
            intervalDuty();
            // record();
        break;
    }
    
    
}
init();



