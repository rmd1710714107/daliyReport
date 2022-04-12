import {open} from "fs/promises"
async function recordcommit(content:string,outPath:string,fileName:string){
    // 打开文件并追加内容，没有文件就新建
    let fd=await open(`${outPath}/${fileName}.txt`,"a");
    try {
        fd.appendFile(content);
    } finally {
        fd.close();
    }
    
    
}
export default recordcommit;