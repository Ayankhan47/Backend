const postModel = require('../models/post.model')
module.exports.createPostView = (req,res)=>{
    res.render(create-post)
}
module.exports.createPostController = async (req,res)=>{
    console.log(req.user.id);
    const {Media,caption}=req.body
    const post = postModel.create({
        Media,
        caption,
        author:req.user.id
    })
    res.status(201).json({
        post,
        message:"post created successfully"
    })
    
}