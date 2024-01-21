import { model, Schema } from "mongoose";

const subTask = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    isDone: {
        type: Boolean,
        default: false
    }
});

const taskSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    isDone: {
        type: Boolean,
        default: false
    },
    subTasks: {
        type: [subTask],
        default: []
    }
});

export default model("tasks", taskSchema);
