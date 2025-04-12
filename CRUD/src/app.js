const express = require('express');
const app  = express();
const userModel = require('./models/user.model')
app.use(express.json())
app.get('/', (req, res) => {
    res.send('server is working properly')
})
app.post('/create', async (req, res) => {
    const{email,username,password} = req.body
    const user = await userModel.create({
        email:email,
        username:username,
        password:password
    })
    res.send(user)
})
app.get("/get-file",async(req,res)=>{
    const users = await userModel.findOne({
        username:"Ayankhan777"
    })
    res.send(users)
})
app.get('/update-user',async(req,res)=>{
    const user = await userModel.findOneAndUpdate({
        username:"kaifkhan777"
    },{
        email:"kahnayan986@gmail.com",
        password:"Ayan865976e65r"
    })
    res.send("user updated sucessfully : ", user)

})
app.get('/delete-user',async(req,res)=>{
    const users = await userModel.findOneAndDelete({
        username:"Ayankhan777"
    })
    res.send("user deleted sucessfully : "+ users)
})
module.exports = app