const mongoose = require('mongoose');
function connect (){
    mongoose.connect('mongodb://localhost:27017/test2')
    .then(()=>{
        console.log("Connected to mongodb")
    })
    .catch((err)=>{
        console.log("error in connecting to mongodb",err)
    })
}
module.exports = connect