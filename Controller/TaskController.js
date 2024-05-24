const Task = require("../Model/Taskmodel");

// post method 
const createTask = (async(req,res)=>{
        try { 
           const task = await Task.create(req.body) 
           res.status(200).json(task)
        } catch (error) {
            res.status(500).json({msg:error.message})
        }
}
)
// Get All task 
const getAllTask= (async(req,res)=>{
    try {
        const task = await Task.find() 
        res.status(200).json(task)
     } catch (error) {
         res.status(500).json({msg:error.message})
     }
})

// Get single task 
const getSingleTask =(async(req,res) =>{
    
    try {
        const {id}=req.params
       const task = await Task.findById(id) 
       res.status(200).json(task)
    if(!task){
        res.status(404).json(`no task with that id:${id}`)

    }
    // res.send("update succeffuly")
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
})

// delete by id 
const deleteTaskById =(async(req,res) =>{
    
    try {
        // console.log(req.params)
        const {id} =req.params 
       const task = await Task.findByIdAndDelete(id) 
       if (!task) {
        return res.status(404).json(`no task without id :${id}`)
        
       }
       res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

})

const updateTask = async (req,res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id:id},
            req.body,
            {
                new:true,
                runValidators:true
            }
        );
        if(!task){
            return(
                res.status(500).json(`no task found: ${id}`)
            )
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
module.exports = {createTask,getAllTask,getSingleTask,deleteTaskById,updateTask}
