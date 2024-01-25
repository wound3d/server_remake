import { Types } from "mongoose";
import Task from "../models/tasks.js";

class ToDoService {
    async createTask(data) {
        const task = await Task.create({
            _id: new Types.ObjectId(),
            text: data
        });
        return task;
    }
    
    async getAllTasks(limit, offset) {
        return await Task.find().skip((offset) * limit).limit(limit);
    }

    async changeTask(text, taskId) {
        let task = await Task.findById(taskId);
        task.text = text;
        await task.save();
        return task;
    }

    async deleteTask(_id) {
        return await Task.deleteOne({ _id});
    }
}

export default ToDoService;
