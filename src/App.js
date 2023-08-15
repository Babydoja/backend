
// backend class 
// const greet = (num) =>{
//     console.log('Hello' + num);
    
// }
// greet('oladoja')

// console.log(globalThis);
// const { log } = require('console');
// globalThis.setTimeout (()=>{})
// creating server 
// using http
// using express 
// const http = require ('http')
// const server = http.createServer((req,res)=>{
//     if (req.url ==='/') {
//         res.setHeader('content-type','text/html')
//         res.write('<h2>This is the home page</h2>')
//         res.end()
        
//     }
//     if (req.url ==='/About') {
//         res.setHeader('content-type','text/html')
//         res.write('<h2>This is About us page</h2>')
//         res.end()
        
//     }
//     if (req.url ==='/Contact') {
//         res.setHeader('content-type','text/html')
//         res.write('<h2>This is contact us page</h2>')
//         res.end()
        
//     }
    
//     console.log('This is our server')

// }) 

// server.listen(8080,()=>{
//     console.log('server now running')
// })

// const greet = ((num)=>{
//     console.log('hello' + num);

// })
// greet('welcome')
// const os = require('os')
// console.log(os.version());

// console.log(os.userInfo());

// practice 
// const greet = ((num)=>{
//     console.log('hello' + num);

// })
// greet('welcome')


// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if (req.url === '/') {
//                 res.setHeader('content-type','text/html')
//                 res.write('<h1>This is About us page</h1>')
//                 res.end()
        
//     }
// })
// server.listen(8000,()=>{
//     console.log('welcome server is loading');
// })
// app.listen (6000,()=>{
//     console.log(`server is now running ${PORT}` );

// })
// express
// app.get('/',(req,res)=>{
//     res.send('server home page')
// })
// app.get('/about',(req,res)=>{
//     res.send('server about page')
// })
// app.delete('/delete',(req,res)=>{
//     res.send('items')
// })

// express 
// const DRURL = 'mongodb+srv://oladojabolatito29:Babydoja7@cluster0.sqwvcwr.mongodb.net/Aprilbackend?retryWrites=true&w=majority'
// const DRURL ='mongodb+srv://oladojabolatito29:Babydoja7@cluster0.sqwvcwr.mongodb.net/Aprilbackend?retryWrites=true&w=majority'
const task_roter=require('../routes/taskroute')
const express  = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const PORT = 7000
const mongoose = require("mongoose")



//middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors(
 {  origin:["http://localhost:3000","http://localhost:3001"] }
))

app.use(task_roter)
// to connect json file to postman


mongoose
.connect (process.env.MONGO_URL)
.then ((req,res)=>{
    app.listen (PORT,()=>{
        console.log(`server is now running ${PORT}` );
    })
    console.log('db connected');
    app.get('/',(req,res)=>{
    res.send('server home page')
    })
    // app.get('/about',(req,res)=>{
    // res.send('server about page')
    // })
    // app.delete('/delete',(req,res)=>{
    // res.send('items')
    // })   
})
    .catch((err)=>{
    console.log(err);
})


// console.log(process.env.EMAIL_PASSWORD);