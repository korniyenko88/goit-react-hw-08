import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useId } from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/auth/operations';
import { registrationShape } from '../FormFieldValidator/FormFieldValidator';
import styles from './RegistrationForm.module.css';
// apiRegisterUser;
const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameInputId = useId();
  const emailInput = useId();
  const passwordInput = useId();

  const handleSubmit = (values, actions) => {
    const auth = { ...values };
    const action = apiRegisterUser(auth);
    dispatch(action);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        // validationSchema={registrationShape}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.formname}>
            <span>Name</span>
            <Field
              id={nameInputId}
              className={styles.input}
              placeholder="enter your name ..."
              name="name"
              type="text"
            />
            <ErrorMessage
              name="name"
              component="span"
              className={styles.error}
            />
          </label>
          <label className={styles.formname}>
            <span>Email</span>
            <Field
              id={emailInput}
              className={styles.input}
              placeholder="enter your email ..."
              name="email"
              type="text"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={styles.error}
            />
          </label>
          <label className={styles.formname}>
            <span>Password</span>
            <Field
              id={passwordInput}
              className={styles.input}
              placeholder="enter your password ..."
              name="password"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={styles.error}
            />
          </label>
          <button type="submit" className={styles.addbtn}>
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
