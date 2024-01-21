import autoBind from "auto-bind";
import TaskService from "./service.js";

class TaskController {
    #TaskService;

    constructor() {
        autoBind(this);
        this.#TaskService = new TaskService();
    }

    async createTask(req, res) {
        try {
            const taskId = await this.#TaskService.createTask(req.body, req.user._id);
            res.status(200).json({ message: "Success", taskId });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong..." });
        }
    }

    async getTask(req, res) {
        try {
            const task = await this.#TaskService.getTask(req.params.taskId, req.user._id);
            if (!task) return res.status(404).json({ message: "That task is not exist" });
            res.status(200).json({ message: "Success", task });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong..." });
        }
    }

    async getAllTasks(req, res) {
        try {
            const tasks = await this.#TaskService.getAllTasks(req.user._id);
            res.status(200).json({ message: "Success", tasks });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong..." });
        }
    }

    async changeTaskStatus(req, res) {
        try {
            const result = await this.#TaskService.changeTaskStatus(req.user._id, req.params.taskId);
            if (!result) return res.status(404).json({ message: "That task is not exist" });
            res.status(200).json({ task: result });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Oops, something went wrong..." });
        }
    }

    async deleteTask(req, res) {
        try {
            await this.#TaskService.deleteTask(req.params.taskId, req.user._id);
            res.status(204).end();
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong..." });
        }
    }
}

export default new TaskController();
