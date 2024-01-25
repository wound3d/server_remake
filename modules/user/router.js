import { Router } from "express";
import { TokenGuard } from "../common/middleware/token-guard.js";
import { Validator } from "../common/middleware/validation.js";
import UserController from "./controller.js";
import { loginAndPasswordDto } from "./dto/login-and-password-dto.js";
import { registrationDto } from "./dto/registration-dto.js";

const router = new Router();
router.post("/authorization", Validator.validate(loginAndPasswordDto), UserController.signIn);
router.post("/registration", Validator.validate(registrationDto), UserController.signUp);
router.get("", TokenGuard.verify, UserController.getSelfData);

export default router;
