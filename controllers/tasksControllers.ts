import { json, Request, Response } from 'express'
import TaskModel from '../models/TaskModel'
import { asyncWrapper } from '../middlewares/async'

export const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
    const tasks = await TaskModel.find({})
    res.status(200).json({ tasks, count: tasks.length })
})

export const createTask = asyncWrapper(async(req: Request, res: Response) => {
    const task = await TaskModel.create(req.body)
    res.status(201).json({ task })
})

export const getTask = asyncWrapper(async (req: Request, res: Response) => {
    const { id: taskID }  = req.params
    const task = await TaskModel.findOne({ _id: taskID })
    if(!task) {
        return res.status(404).json({ msg: `No task with id: ${ taskID }`})
    }  
    res.status(200).json({ task })

})

export const updateTask = asyncWrapper(async (req: Request, res: Response) => {
    
    const { id: taskID } = req.params
    const task = await TaskModel.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    if(!task) {
        return res.status(404).json({ msg: 'no such task' })
    }
    res.status(200).json({ task })

})

export const deleteTask = asyncWrapper(async (req: Request, res: Response) => {
    const { id: taskID } = req.params
    const task = await TaskModel.findOneAndDelete({ _id: taskID })
    if(!task) {
        return res.status(404).json({ msg: `No task with id: ${ taskID }`})
    }
    res.status(200).json({ task })
})
