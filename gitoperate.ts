const Git=require("nodegit");
const moment = require('moment');
moment.locale("zh-cn");

import recordcommit from "./recodeCommit";
import {matchInfo} from "./utils"
async function setGitLog(path:string,branch:string,outPath:string,fileName:string){
    // const localTime=moment().valueOf();
    const endDate=new Date().getTime();
    const beginDate=endDate-(1000*60*60*8);
    let messageList:string[]=[`${new Date().toLocaleDateString()}\n`]
    let repo=await Git.Repository.open(`${path}/.git`)
    const walker = repo.createRevWalk();
    walker.pushGlob(`*${branch}`)
    let commits:any[] = await walker.getCommitsUntil((c:any) => {
        const now = new Date(c.date()).getTime();
        let ff=now > beginDate && now < endDate;
        return ff
    })
    // 即使最后一个ff是false，他所对应的commit也会返回，所以需要去掉最后一个commit;
    if(commits.length>=1) commits.pop();
    let tempMsgList=commits.map((item:any) => {
        return item.messageRaw();
    });
    tempMsgList.forEach((message:string)=>{
        let tempData:string[]=matchInfo(message);
        messageList=[...messageList,...tempData];
    })
    messageList.push("----------------------------------------------\n")
    let content=messageList.join("\n");
    recordcommit(content,outPath,fileName);

}
export default setGitLog;