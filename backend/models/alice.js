
const mongoose = require('mongoose');

const aliceSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : Number,
        required : true
    },
    number : {
        type : Number,
        required : true
    }
},{ timestamps : true , versionKey : false });

const aliceModel = mongoose.model('data1',aliceSchema);

module.exports = aliceModel ;