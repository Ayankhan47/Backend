const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect('mongodb://localhost:27017/routes')
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports = connect;