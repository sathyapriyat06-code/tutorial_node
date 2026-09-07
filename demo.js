const fs=require('fs')
if(!fs.existsSync('./docs')){
    fs.mkdir('./docs',(err)=>{
    if(err){
        console.log(err.message);
        
    }
    else{
        console.log("folder created");
        
    }
})
}


fs.writeFile('./docs/file.txt','i am developer',(err)=>{
    if(err){
        console.log(err.message);
        
    }
    else{
        console.log("text file written");
        
    }
})

if(fs.existsSync('./docs/file.txt')){
    fs.readFile('./docs/file.txt',(err)=>{
        if(err){
            console.log(err.message);
            
        }
        else{
            console.log("successfully readed");
            
        }
    })
}