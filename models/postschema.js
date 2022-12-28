const mongoose = require('mongoose');
const Schema =mongoose.Schema
const postSchema = new Schema({
    image:String,
    title:String,
    description: String,
    authorname:String,
    date: Date,
    time:Time
    }
    )
const post = mongoose.model('blogapp', postSchema);
module.exports=post