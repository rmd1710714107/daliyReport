import schedule from "node-schedule";
import record from "./record"
function intervalDuty(){
    schedule.scheduleJob('0 30 17 * * *',()=>{
        console.log("开始写入数据-----------");
        record();
        console.log("数据写入完成-----------");
        
    }); 
}
export default intervalDuty;