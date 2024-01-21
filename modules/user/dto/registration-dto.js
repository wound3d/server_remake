import * as yup from "yup";

export const registrationDto = yup.object().shape({
    login: yup.string().required().min(4).max(10),
    firstName: yup.string().required().min(2).max(25),
    lastName: yup.string().required().min(2).max(25),
    password: yup.string().required().min(4).max(24)
});
