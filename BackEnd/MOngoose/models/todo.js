import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
   titel: String,
    done: Boolean,
    dueDate: Date,
    priority: Number,
});
export const Todo = mongoose.model('Todo', todoSchema);
