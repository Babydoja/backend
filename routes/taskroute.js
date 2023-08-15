
// try and catch is use to handle errors
const express = require('express')
const Task = require('../Model/Taskmodel')
const {createTask, getAllTask,getSingleTask,deleteTaskById,updateTask} = require('../Controller/TaskController')
const router = express.Router()

//create task
// create task on post 
router.post('/api/tasks',createTask)
// how to get all task created 
//  create task on get 
// router.get('/api/tasks' ,async(req,res) =>{
    
//     try {
//        const task = await Task.find() 
//        res.status(200).json(task)
//     } catch (error) {
//         res.status(500).json({msg:error.message})
//     }
// })

// getting all tasks
router.get('/api/tasks' ,getAllTask)
// router.get('/api/tasks' ,async(req,res) =>{
    
//     // try {
//     //    const task = await Task.find() 
//     //    res.status(200).json(task)
//     // } catch (error) {
//     //     res.status(500).json({msg:error.message})
//     // }
// })


// router.get ('/api/tasks' ,async(req,res) =>{
//     res.send("task run successfull!!!")
// })
// getting only one single task 
router.get('/api/tasks/:id' ,getSingleTask) 
    
//     try {
//         const {id}=req.params
//        const task = await Task.findById(id) 
//        res.status(200).json(task)
//     if(!task){
//         res.status(404).json(`no task with that id:${id}`)

//     }
//     res.send("update succeffuly")
//     } catch (error) {
//         res.status(500).json({msg:error.message})
//     }
// })


// craete task by the id 
// router.get('/api/tasks/:id' ,async(req,res) =>{
    
//     try {
//         console.log(req.params)
//         const {id} =req.params 
//        const task = await Task.findById(id) 
//        if (!task) {
//         return res.status(404).json(`no task without id :${id}`)
        
//        }
//        res.status(200).json(task)
//     } catch (error) {
//         res.status(500).json({msg:error.message})
//     }
// })

// router.get('/api/tasks/:id',async(req,res)=>{
//     res.send("single task created")
// })
// deleting by id 
// router.delete('/api/tasks/:id' ,async(req,res) =>{
    
//     try {
//         // console.log(req.params)
//         const {id} =req.params 
//        const task = await Task.findByIdAndDelete(id) 
//        if (!task) {
//         return res.status(404).json(`no task without id :${id}`)
        
//        }
//        res.status(200).json(task,"task delete successfully")
//     } catch (error) {
//         res.status(500).json({msg:error.message})
//     }

// })
router.delete('/api/tasks/:id',deleteTaskById)
// async(req,res) =>{
    
//     try {
//         // console.log(req.params)
//         const {id} =req.params 
//        const task = await Task.findByIdAndDelete(id) 
//        if (!task) {
//         return res.status(404).json(`no task without id :${id}`)
        
//        }
//        res.status(200).json(task,"task delete successfully")
//     } catch (error) {
//         res.status(500).json({msg:error.message})
//     }

// })

router.patch('/api/tasks/:id',updateTask)
// async(req,res) =>{
    
//     try {
        // console.log(req.params)
//         const {id} =req.params 
//        const task = await Task.findByIdAndUpdate({_id:id},req.body,{new:true,runValidation:true}) ;
//        if (!task) {
//         return res.status(404).json(`no task without id :${id}`)
        
//        }

//        res.status(200).json(task)
//     } catch (error) {
//         res.status(500).json({msg:error.message})
//     }

// })



// router.put('/api/tasks/:id' ,async(req,res) =>{
    
//     try {
//         // console.log(req.params)
//         const {id} =req.params 
//        const task = await Task.findByIdAndUpdate(id,{name:'pelumi updated'}) 
//        if (!task) {
//         return res.status(404).json(`no task without id :${id}`)
        
//        }

//        res.status(200).json(task)
//     } catch (error) {
//         res.status(500).json({msg:error.message})
//     }

// })




module.exports=router