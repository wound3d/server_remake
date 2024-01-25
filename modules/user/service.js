import { Types } from "mongoose";
import { TokenGuard } from "../common/middleware/token-guard.js";
import Task from "../models/tasks.js";
import User from "../models/user.js";

class UserService {
    async signUp(data) {
        const userFound = await User.findOne({ login: data.login });
        if (userFound) return false;
        const userId = new Types.ObjectId();
        await new User({
            _id: userId,
            ...data
        }).save();
        return await TokenGuard.generate({ _id: userId });
    }

    async signIn(login, password) {
        const userFound = await User.findOne({ login });
        if (!userFound || userFound.password != password) return false;
        return await TokenGuard.generate({ _id: userFound._id });
    }

    async getSelfData(_id) {
        const user = await User.findById(_id).select("-password");
        user.tasks = await Task.find({ ownerId: _id }).select("_id name isDone");
        return user;
    }
}

export default UserService;
