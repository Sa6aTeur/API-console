import * as yup from "yup";

export const loginFormValidateSchema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().required(),
  })