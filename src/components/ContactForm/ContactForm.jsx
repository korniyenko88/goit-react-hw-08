import styles from './ContactForm.module.css';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { addContactShape } from '../FormFieldValidator/FormFieldValidator';
import { useId } from 'react';
import toast from 'react-hot-toast';



const INITIAL_VALUES = {
  id: '',
  name: '',
  number: '',
};



const ContactForm = () => {
  const dispatch = useDispatch();
  const nameInputId = useId();
  const numberInputId = useId();

     const handleSubmit = async (values, actions) => {
       const contact = {
         ...values,
       };

       try {
          dispatch(addContact(contact)); 
         toast.success('Contact added successfully!');
       } catch (error) {
         console.error('Failed to add contact: ', error);
         toast.error(`Error: ${error.message}`);
       }

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
          <label htmlFor={nameInputId}>
            <span className={styles.formname}>Name</span>
            <Field
              placeholder="enter your name ..."
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
              placeholder="enter phone number ..."
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
