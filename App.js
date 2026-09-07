const exp=require('express')

const app=exp()
app.listen(3000)
app.use((req,res,next)=>{
    console.log('Middleware1');
    
    next()
    
})

app.use((req,res,next)=>{
    console.log('Middleware2');
    next()
    
})
app.get('/',(req,res)=>{
  
    res.sendFile('./docs/index.html',{root:__dirname})
})
app.get('/about',(req,res)=>{
    res.sendFile('./docs/about.html',{root:__dirname})
})
app.get('/contact',(req,res)=>{
    res.sendFile('./docs/contact.html',{root:__dirname})
})

app.get('/contactus',(req,res)=>{
    res.redirect('/contact')
})
app.use((req,res)=>{
    res.status(404).sendFile('./docs/notFound.html',{root:__dirname})
})