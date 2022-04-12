import operateData from "./dataBase";
import setGitLog from "./gitoperate"
async function record():Promise<void>{
    let res=await operateData.query();
    if (Array.isArray(res)) {
        res.forEach((item:any) => {
            setGitLog(item.path,item.branch,item.outPath,item.fileName);
        });
    }
    
}
export default record;