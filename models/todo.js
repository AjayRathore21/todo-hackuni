const mongoose = require('mongoose');

// Schema for Todo list object (task)

const todoSchema = new mongoose.Schema({

    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true
    }
});

// Creating mongoose model for this schema:---

const Todo = mongoose.model('todo',todoSchema);

// exporting the model'todo' with the schema

module.exports = Todo;
