const fs = require('fs');


//fs.writeFileSync('./test.txt','Hey there');  //sync


//async
//fs.writeFile('./test.txt', "HEllo hello", (err)=> {});


//  result = fs.readFileSync('./contact.txt',"utf-8");
// console.log(result);

// fs,fs.readFile('./contact.txt',"utf-8", (err, result) =>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// })


fs.appendFileSync('./test.txt', "hey There this is the append process \n");
