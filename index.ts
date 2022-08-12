import * as express from 'express'
const app = express()
import { tasksRouter } from './routers/tasksRouter'
import connect from './db/connect'
import 'dotenv/config'

const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hi mom')
})

app.use('/api/v1/tasks', tasksRouter)

const start = async (url: string, port: number) => {
    try {
        await connect(url)
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error);
    }
}

start(process.env.MONGO_URI as string, port)
