import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginShape } from '../FormFieldValidator/FormFieldValidator';
import { apiLogInUser } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import styles from './LoginForm.module.css'

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
    <div className={styles.divform}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginShape}
      >
        <Form className={styles.form}>
          <label htmlFor={emailInput}>
            <span className={styles.formname}>Email</span>

            <Field
              className={styles.input}
              type="email"
              name="email"
              id={emailInput}
              placeholder="enter email..."
            />
            <ErrorMessage
              className={styles.error}
              name="email"
              component="span"
            />
          </label>

          <label htmlFor={passwordInput}>
            <span className={styles.formname}>Password</span>

            <Field
              className={styles.input}
              type="password"
              name="password"
              id={passwordInput}
              placeholder="enter password..."
            />
            <ErrorMessage
              className={styles.error}
              name="password"
              component="span"
            />
          </label>

          <button className={styles.addbtn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
