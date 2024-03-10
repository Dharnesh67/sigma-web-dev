const mongoose = require('mongoose');
const kittySchema = new mongoose.Schema({
    name: String,
    salary:Number,
    language:String,
    city:String,
    ismanager:Boolean
});
const kitten =mongoose.model('kitten',kittySchema);
module.exports=kitten;