import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

export const registerSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    referralCode: yup.string(),
});

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
});

export const resetPasswordSchema = yup.object().shape({
    password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});
