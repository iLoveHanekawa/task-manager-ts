import * as express from 'express'
import { getAllTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/tasksControllers'
export const tasksRouter = express.Router()

tasksRouter.route('/').get(getAllTasks).post(createTask)
tasksRouter.route('/:id').patch(updateTask).delete(deleteTask).get(getTask)
