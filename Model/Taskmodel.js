// how to save to database
const mongoose = require('mongoose')
const taskschema= mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please add a task']
        }, 
       
    },
    {
        timestamps:true
    }
)
const Task = mongoose.model('Tasks',taskschema)

module.exports = Task;