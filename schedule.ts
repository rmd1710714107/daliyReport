import schedule from "node-schedule";
import record from "./record"
async function intervalDuty(){
    schedule.scheduleJob('30 * * * * *',async ()=>{
        console.log("开始写入数据-----------");
        await record();
        console.log("数据写入完成-----------");
        
    }); 
}
export default intervalDuty;