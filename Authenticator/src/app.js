const express = require("express")
const postModel = require("./models/post.model")
const userModel = require("./models/user.model")
const app = express()
app.set('veiw engien','ejs')
module.exports = app