import nedb from "nedb";
class DataSQL{
    private dbInstance;
    constructor(filename:string){
        this.dbInstance=new nedb({
            filename,
            autoload:true
        })
    }
    insert(data:any){
        this.dbInstance.insert(data,(err)=>{
            if (err) {
                throw new Error("数据插入失败")
            }
        })
    }
    delete(condition={}){
        return new Promise((resolve,reject)=>{
            this.dbInstance.remove(condition,{multi: true},(err:any,numRemoved:number)=>{
                if (err) {
                    throw new Error("数据删除失败")
                };
                resolve(numRemoved);
            })
        })
    }
    uodate(){

    }
    query(condition={}){
        return new Promise((resolve,reject)=>{
            this.dbInstance.find(condition,(err:any,doc:any)=>{
                if (err) {
                    throw new Error("数据查询失败")
                };
                resolve(doc);
            })
        })
        
    }
    
}
export default DataSQL;