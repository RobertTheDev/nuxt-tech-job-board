import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last name is required'),
  emailAddress: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .min(8, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default signUpSchema;
