const fs = require('fs');

const readStream=fs.createReadStream('./docs/Hugefile.txt',{encoding:'utf-8'})
const writeStream=fs.createWriteStream('./docs/copyHugefile.txt')
readStream.on('data',(buffer)=>{
    // writeStream.write(buffer);
    
})
readStream.pipe(writeStream)