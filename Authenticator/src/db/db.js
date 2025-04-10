const mongoose = require('mongoose');
const connect= ()=> {
    mongoose.connect("mongodb://localhost:27017/test")
    .then(()=>{
        console.log("Connected to mongodb")
    })
    .catch((err)=>{
        console.log(err,"error connecting to mongodb")
    })
}
module.exports = connect