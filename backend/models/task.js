const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    category:{
        type: String,
        required:true,
    },
    priority:{
        type:Number,
        required:true,
        unique:true
    }
}, { versionKey : false });

const Task = mongoose.model('task',taskSchema);

module.exports = Task;