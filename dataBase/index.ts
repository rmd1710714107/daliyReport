import DataSQL from "./dataSQL"
import {dataType} from "./types"
class OperateData{
    private dbInstance;
    constructor(filename:string){
        this.dbInstance=new DataSQL(filename);
    }
    insertRecord(data:dataType|dataType[]){
        this.dbInstance.insert(data);
    }
    query(){
        return this.dbInstance.query();
    }
    delete(condition?:any){
        if (condition) {
            return this.dbInstance.delete(condition)
        }else{
            return this.dbInstance.delete();
        }
        
    }
}
let operateData=new OperateData("./dataBase.db");
export default operateData;