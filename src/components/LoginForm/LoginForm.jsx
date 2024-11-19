import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginShape} from '../FormFieldValidator/FormFieldValidator';
import { apiLogInUser } from '../../redux/auth/operations';
import toast from 'react-hot-toast';


const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailInput = useId();
  const passwordInput = useId();

   const handleSubmit = async (values, actions) => {
     const auth = { ...values };

     try {
       await dispatch(apiLogInUser(auth)).unwrap(); 
     } catch (error) {
       
       toast.error('Invalid email or password');
     } finally {
       actions.resetForm();
     }
   };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginShape}
    >
      <Form>
        <div>
          <label htmlFor={emailInput}>
            <span>Email</span>

            <Field
              type="email"
              name="email"
              id={emailInput}
              placeholder="enter email..."
            />
            <ErrorMessage name="email" component="span" />
          </label>

          <label htmlFor={passwordInput}>
            <span>Password</span>

            <Field
              type="password"
              name="password"
              id={passwordInput}
              placeholder="enter password..."
            />
            <ErrorMessage name="password" component="span" />
          </label>

          <button  type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
