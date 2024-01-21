import autoBind from "auto-bind";
import UserService from "./service.js";

class UserController {
    #userService;

    constructor() {
        autoBind(this);
        this.#userService = new UserService();
    }

    async signUp(req, res) {
        try {
            const token = await this.#userService.signUp(req.body);
            if (!token) return res.status(409).json({ message: "Such a user already exist" });
            res.status(200).json({ message: "Success", token });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong..." });
        }
    }

    async signIn(req, res) {
        try {
            const token = await this.#userService.signIn(req.body.login, req.body.password);
            if (!token) return res.status(404).json({ message: "Login or password is not correct." });
            res.status(200).json({ message: "Success", token });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong..." });
        }
    }

    async editNames(req, res) {
        try {
            await this.#userService.editNames(req.user._id, req.body.firstName, req.body.lastName);
            res.status(200).json({ message: "Success" });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong..." });
        }
    }

    async editLogin(req, res) {
        try {
            const result = await this.#userService.editLogin(req.user._id, req.body.login, req.body.password);
            if (!result) return res.status(401).json({ message: "Password is not correct" });
            res.status(200).json({ message: "Success" });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong..." });
        }
    }

    async getSelfData(req, res) {
        try {
            const user = await this.#userService.getSelfData(req.user._id);
            res.status(200).json(user);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "Oops, something went wrong..." });
        }
    }
}

export default new UserController();
