function handlePath(path:string):string{
    return path.replace(/\\/g,"/");
}
function matchInfo(str:string):string[]{
    let reg:RegExp=/-([^-\+]*)\+/g
    let res:IterableIterator<RegExpMatchArray>=str.matchAll(reg);
    let newInfoList:string[]=[];
    for (const iterator of res) {
        newInfoList.push(iterator[1]);
    }
    return newInfoList;
}
function timetamp():string{
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDay();
    return `${year}${month}${day}`
}
export{
    handlePath,
    matchInfo,
    timetamp
};
