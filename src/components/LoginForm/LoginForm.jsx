import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginShape} from '../FormFieldValidator/FormFieldValidator';
import { apiLogInUser } from '../../redux/auth/operations';
import clsx from 'clsx';


const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailInput = useId();
  const passwordInput = useId();

  const handleSubmit = (values, actions) => {
    const auth = { ...values };
    const action = apiLogInUser(auth);
    dispatch(action);
    actions.resetForm();
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
