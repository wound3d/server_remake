import * as yup from "yup";

export const editNamesDto = yup.object().shape({
    firstName: yup.string().required().min(2).max(25),
    lastName: yup.string().required().min(2).max(25)
});
