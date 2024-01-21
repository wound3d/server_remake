// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from "mongoose";
import Task from "./modules/models/tasks.js";

const database = process.env.DB_NAME;
const host = process.env.MG_HOST || "127.0.0.1";
const port = process.env.MG_PORT || 27017;
const login = process.env.MG_USER;
const password = process.env.MG_PASS;

mongoose.connect(`mongodb://${login}:${password}@${host}:${port}`, { dbName: database });
Task.find().then((result) => console.log(`Tasks count: ${result.length}`));
