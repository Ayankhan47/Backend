const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.post('/create',(req,res)=>{
    const data = req.body.Data
    fs.writeFile('data.txt',data,(err)=>{
        if(err){
            console.log(err)
            res.status(500).send('error in writing files')
        }else{
            res.status(200).send('file written successfully')
        }
    })
})
module.exports = app;