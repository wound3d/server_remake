import { model, Schema } from "mongoose";

const taskSchema = new Schema({
    text: {
        type: String,
        required: true
    },
}, { versionKey: false });

export default model("tasks", taskSchema);
