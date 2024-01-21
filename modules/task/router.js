import { Router } from "express";
import { TokenGuard } from "../common/middleware/token-guard.js";
import { CONTEXT, Validator } from "../common/middleware/validation.js";
import TaskController from "./controller.js";
import { taskDto } from "./dto/task-dto.js";
import { taskIdDto } from "./dto/task-id-dto.js";

const router = new Router();

router.post("", TokenGuard.verify, Validator.validate(taskDto), TaskController.createTask);
router.get("/all", TokenGuard.verify, TaskController.getAllTasks);
router.get("/:taskId", TokenGuard.verify, Validator.validate(taskIdDto, CONTEXT.PATH), TaskController.getTask);
router.patch("/:taskId", TokenGuard.verify, Validator.validate(taskIdDto, CONTEXT.PATH), TaskController.changeTaskStatus);
router.delete("/:taskId", TokenGuard.verify, Validator.validate(taskIdDto, CONTEXT.PATH), TaskController.deleteTask);

export default router;
