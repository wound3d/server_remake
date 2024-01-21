import * as yup from "yup";

export const taskIdDto = yup.object().shape({
    taskId: yup.string().matches(/^[a-fA-F0-9]{24}$/, "Must be objectId format")
});
