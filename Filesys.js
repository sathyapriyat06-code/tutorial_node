// const fs= require('fs');

// if(!fs.existsSync('./docs')){
//     fs.mkdir('./docs',(err)=>{
//     if(err){
//         console.log(err.message);
        
//     }
//     else{
//         console.log('folder created');
//     }
    
    
// })
// }

// fs.writeFile('./docs/file.txt','i am sathya',(err)=>{
//     if(err){
//         console.log(err.message);
        
//     }
//     else{
//         console.log("file created");
        
//     }
// })

// fs.readFile('./docs/file.txt',(err,data)=>{
//     if(err){
//         console.log(err.message);
        
//     }
//     else{
//         console.log(data.toString());
        
//     }
// })
// if(fs.existsSync('./docs/file.txt')){
//     fs.unlink('./docs/file.txt', (err)=>{
//         if(err){
//             console.log(err.message);
            
//         }
//         else{
//             console.log("file deleted");
            
//         }
//     })
// }

// fs.rmdir('./docs',(err)=>{
//     if(err){
//         console.log(err.message);
        
//     }
//     else{
//         console.log("folder deleted");
        
//     }
// })