//固定套路写promise
const fs = require('fs');
//默写出来
function readFile(filename,encoding){
    //Promise是有一个参数，有一个参数是function
    return new Promise(
        (resolve,reject)=>{
            //callback_fs.js
            fs.readFile("./test.js","utf-8",(err,data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });

        }
    );
}

//promise function用then
readFile("./test.js","utf-8").then((data)=>{
    console.log("Data:");
    console.log(data);},
    (err)=>{
    console.log("Error:");
    console.log(err);
}
)