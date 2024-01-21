import { Types } from "mongoose";
import Task from "../models/tasks.js";

class ToDoService {
    async createTask(data, ownerId) {
        const taskId = new Types.ObjectId();
        await new Task({
            _id: taskId,
            ownerId,
            ...data
        }).save();
        return taskId;
    }

    async getTask(_id, ownerId) {
        const task = await Task.findById(_id);
        if (!task) return false;
        if (task.ownerId != ownerId) return false;
        return task;
    }

    async getAllTasks(ownerId) {
        return await Task.find({ ownerId }).select("_id name isDone");
    }

    async changeTaskStatus(ownerId, taskId) {
        const task = await Task.findById(taskId);
        if (task.ownerId.toString() != ownerId) return false;
        task.isDone = !task.isDone;
        await task.save();
        return task;
    }

    async deleteTask(_id, ownerId) {
        return await Task.deleteOne({ _id, ownerId });
    }

    async duplicateTask(_id) {
        const taskId = new Types.ObjectId();
        const taskFound = await Task.findById(_id);
        taskFound._id = taskId;
        taskFound.save();
        return taskId;
    }
}

export default ToDoService;
