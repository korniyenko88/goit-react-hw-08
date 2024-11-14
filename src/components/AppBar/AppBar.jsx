import React from 'react';

import styles from './AppBar.module.css';
import clsx from 'clsx';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={styles.navi}>
      <Navigation />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

export default AppBar;
