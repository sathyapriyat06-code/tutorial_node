console.log("hello world");
const hello=(hname)=>{
    console.log(`Hello,${hname}!`);  
}
hello("sathya")
//console.log(global);
globalThis.setTimeout(()=>{
    console.log("This is timeout function");
    clearInterval(intfun) 
},6000)
const intfun=setInterval(()=>{
    console.log("This is setinterval function"); 
},1000)