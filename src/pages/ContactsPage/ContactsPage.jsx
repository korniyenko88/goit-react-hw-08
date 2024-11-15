import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectConfirmDeletion,
  selectCurrentContact,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentContact = useSelector(selectCurrentContact);
  const modal = useSelector(selectConfirmDeletion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, currentContact]);

  return (
    <div>
      {modal && <ModalWindow />}
      <h1>Phonebook</h1>
      {currentContact ? <EditContactForm /> : <ContactForm />}
      <SearchBox />
      <div>
        {loader && !error && <Loader />}
        {error && !loader && <Error />}
      </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
