//
const fs = require('fs').promises;
//async执行环境,async修饰函数，是一个keyword,转换function为async 函数
//()();前面的函数后面执行
(async()=>{
    //throw new Error("Error Demo")
    //await同步调用法 可引用try catch，异步不行
    try{
    const data = await fs.readFile("./test.js","utf-8")
    console.log(data)
    }
    catch(err){
        console.error("catch:");
        console.error(err)
    }
    finally{
        console.log('finally')
    }
//没有明确目的的catch，捕获没有处理好的异常
})().catch(err=>{
    console.error(err);  
});

//理解async await
