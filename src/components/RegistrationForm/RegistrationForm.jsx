import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { registrationShape } from '../FormFieldValidator/FormFieldValidator';
import styles from './RegistrationForm.module.css';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const handleSubmit = (values, actions) => {
    console.log("values: ", values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={registrationShape}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.formname}>
            <span>Name</span>
            <Field className={styles.input} name="name" type="text" />
            <ErrorMessage
              name="name"
              component="span"
              className={styles.error}
            />
          </label>
          <label className={styles.formname}>
            <span>Email</span>
            <Field className={styles.input} name="email" type="text" />
            <ErrorMessage
              name="email"
              component="span"
              className={styles.error}
            />
          </label>
          <label className={styles.formname}>
            <span>Password</span>
            <Field className={styles.input} name="password" type="password" />
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
