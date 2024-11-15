import * as Yup from 'yup';


const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄ' -]*$/;
const phoneNumberRegex = /^\+?(\(\d{3}\)|\d{3})[-\s\.]?\d{3}[-\s\.]?\d{4,6}$/;

export const addContactShape = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(nameRegex, 'Invalid name')
    .min(3, 'Name must be at least 3 characters')
    .max(50, "Name can't be longer than 50 characters"),
  number: Yup.string()
    .required('Number is required')
    .matches(phoneNumberRegex, 'Invalid phone number')
    .min(3, 'Number must be at least 3 characters')
    .max(50, "Number can't be longer than 50 characters"),
});


// Registration           {
//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepwd12345"
// }

export const registrationShape = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(nameRegex, 'Invalid name')
    .min(3, 'Name must be at least 3 characters')
    .max(20, "Name can't be longer than 50 characters"),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .max(50, "Email can't be longer than 50 characters"),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(20, "Password can't be longer than 20 characters")
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&#]/,
      'Password must contain at least one special character'
    ),
});

export const loginShape = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .max(50, "Email can't be longer than 50 characters"),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(20, "Password can't be longer than 20 characters")
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&#]/,
      'Password must contain at least one special character'
    ),
});