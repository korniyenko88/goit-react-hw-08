import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectCurrentContact,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentContact = useSelector(selectCurrentContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, currentContact]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <div>
        {isLoading && !error && <Loader />}
        {error && !isLoading && <Error />}
      </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
