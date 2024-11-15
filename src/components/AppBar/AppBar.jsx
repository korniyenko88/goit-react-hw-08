import React from 'react';
import styles from './AppBar.module.css';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoading);
  return (
    <header className={styles.navi}>
      <Navigation />
      <AuthNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
