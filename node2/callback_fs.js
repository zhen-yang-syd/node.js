//引入fs
const fs = require('fs');
//readfile
// (err,data)=>第一个为错误结果，第二个是文件内容，顺序固定
fs.readFile("./test.js","utf-8",(err,data)=>{
    if(err){
        console.log("err:")
        console.error(err);
    }
    else{
        console.log(data);
    }
});

