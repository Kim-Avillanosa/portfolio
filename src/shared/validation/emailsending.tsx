import * as yup from "yup";

export const emailRule = yup.object({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  company: yup.string().trim().required("Please indicate the company name"),
  message: yup.string().trim().required("Message is required"),
});
