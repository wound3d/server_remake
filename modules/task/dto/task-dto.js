import * as yup from "yup";

export const taskDto = yup.object().shape({
    text: yup.string().min(2).max(24).required(),
});
