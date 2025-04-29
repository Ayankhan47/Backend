const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const postModel = require('../models/post.model')
module.exports.registerViewController = (req,res)=>{
    res.render('register')
}
module.exports.registerUserController = async (req,res)=>{
    const {username , email , profileImage , password} = req.body
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await userModel.create({
        username,
        email,
        profileImage,
        password : hashPassword
    })
    const token = jwt.sign({
        id:user._id,
        email: user.email
    },"node-auth-secret") 
    req.cookie("token",token)
    req.status(201).json({
        user, token
    })
}
module.exports.loginViewController = (req,res)=>{
    res.render('login')
}
module.exports.loginUserController = async (req,res)=>{
    const{email,password}=req.body
    const user = await userModel.findOne({
        email
    })
    if(!user){
        res.status(401).json({
            massage:"ivalid email or password"
        })
    }
    const ismatch = await bcrypt.compare(password,user.password)
    if(!ismatch){
        res.status(401).json({
            massage:"ivalid email or password"
        })
    }
    req.cookie("token",token)
    res.status(200).json({
        user,token
    })
}
module.exports.feedVeiwController = async (req,res)=>{
    const post = await postModel.find().populate("author")
    res.render('feed',{posts})
}