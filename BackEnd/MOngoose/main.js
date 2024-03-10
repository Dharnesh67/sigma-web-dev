import mongoose from 'mongoose';
import express from 'express';
import { Todo } from './models/todo.js';
let conn= await mongoose.connect("mongodb://localhost:27017/Todo");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({
        title: 'My first todo',
        done: false,
        dueDate: new Date(),
        priority: 3,
    });
    todo.save();
  res.send('Hello World!')
//   res.send(a)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

