import * as express from 'express'
import { getAllTasks, getTask, createTask, updateTast, deleteTask } from '../controllers/tasksControllers'
export const tasksRouter = express.Router()

tasksRouter.route('/').get(getAllTasks).post(createTask)
tasksRouter.route('/:id').put(updateTast).delete(deleteTask).get(getTask)
