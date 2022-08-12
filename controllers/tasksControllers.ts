import { Request, Response } from 'express'

export const getAllTasks = (req: Request, res: Response) => {
    res.send('all items from the file')
}

export const createTask = (req: Request, res: Response) => {
    res.json(req.body)
}

export const getTask = (req: Request, res: Response) => {
    res.json({ id: req.params.id })
}

export const updateTast = (req: Request, res: Response) => {
    res.send('Updated task')
}

export const deleteTask = (req: Request, res: Response) => {
    res.send('Deleted Task')
}
