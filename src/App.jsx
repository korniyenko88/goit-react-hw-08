import { React, lazy,  useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { useDispatch } from 'react-redux';
import './App.css';
// import ContactList from './components/ContactList/ContactList';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactForm from './components/ContactForm/ContactForm';
import { lazy } from 'react';


// const HomePage = lazy(
//   () => import('./pages/HomePage/HomePage')
// );
// const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const RegistrationPage = lazy(() =>
//   import('./pages/RegistrationPage/RegistrationPage')
// );


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>

    //   <div>
    //     <h1>Phonebook</h1>
    //     <ContactForm />
    //     <SearchBox />
    //     <ContactList />
    //   </div>
  );
}

export default App;
