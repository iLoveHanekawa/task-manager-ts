import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false 
    }
})

export default mongoose.model('Task', TaskSchema)