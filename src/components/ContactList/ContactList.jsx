import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const selectContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={styles.list}>
        {selectContacts && selectContacts.length > 0 ? (
          selectContacts.map(cont => (
            <li key={cont.id}>
              <Contact data={cont} />
            </li>
          ))
        ) : (
          <li className={styles.listP}>No contacts found.</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
