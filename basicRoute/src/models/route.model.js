const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    name:{
        type: String
    },
    distance:{
        type: Number
    },
    time:{
        type: Number
    }
});

const RouteModel = mongoose.model('Route',routeSchema);
module.exports = RouteModel;