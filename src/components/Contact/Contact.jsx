import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(id)).unwrap(); 
      toast.success('Contact removed successfully!');
    } catch (error) {
      console.error('Failed to delete contact: ', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.iteminfo}>
        <span className={styles.name}>🙍‍♂️{name}</span>
        <span>📞{number}</span>
      </div>
      <button onClick={handleDelete} className={styles.btn} type="button">
        ❌
      </button>
    </div>
  );
};

export default Contact;
