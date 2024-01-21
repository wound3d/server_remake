import * as yup from "yup";

export const taskDto = yup.object().shape({
    name: yup.string().min(2).max(24).required(),
    description: yup.string().min(5).max(300)
});
