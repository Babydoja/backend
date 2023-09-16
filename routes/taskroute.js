
// try and catch is use to handle errors
const express = require('express')
const Task = require('../Model/Taskmodel')
const {createTask, getAllTask,getSingleTask,deleteTaskById,updateTask} = require('../Controller/TaskController')
const router = express.Router()



//create task
// create task on post 
router.post('/api/tasks',createTask)

// getting all tasks
router.get('/api/tasks' ,getAllTask)

// getting only one single task 
router.get('/api/tasks/:id' ,getSingleTask) 
    
// delete a task 
router.delete('/api/tasks/:id',deleteTaskById)
// update task 
router.put('/api/tasks/:id',updateTask)
module.exports=router