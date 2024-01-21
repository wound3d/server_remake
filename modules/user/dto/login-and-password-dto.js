import * as yup from "yup";

export const loginAndPasswordDto = yup.object().shape({
    login: yup.string().required().min(4).max(10),
    password: yup.string().required().min(4).max(24)
});
