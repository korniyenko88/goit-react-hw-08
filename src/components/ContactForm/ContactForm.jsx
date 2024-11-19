import styles from './ContactForm.module.css';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { addContactShape } from '../FormFieldValidator/FormFieldValidator';
import { useId } from 'react';



const INITIAL_VALUES = {
  id: '',
  name: '',
  number: '',
};



const ContactForm = () => {
  const dispatch = useDispatch();
  const nameInputId = useId();
  const numberInputId = useId();

   const handleSubmit = (values, actions) => {
    const contact = {
      ...values,
    };

    const action = addContact(contact);
    dispatch(action);

    actions.resetForm();
  };

    

  return (
    <div className={styles.divform}>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={addContactShape}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label htmlFor={nameInputId} >
            <span className={styles.formname}>Name</span>
            <Field
              className={styles.input}
              name="name"
              type="text"
              id={nameInputId}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={styles.error}
            />
          </label>
          <label htmlFor={numberInputId}>
            <span className={styles.formname}>Number</span>
            <Field
              className={styles.input}
              name="number"
              type="text"
              id={numberInputId}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={styles.error}
            />
          </label>
          <button type="submit" className={styles.addbtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
