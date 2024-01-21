import { model, Schema } from "mongoose";

const userSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        default: null
    },
    password: {
        type: String,
        required: true
    }
});

export default model("users", userSchema);
