import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './Navigation.module.css';
import clsx from 'clsx';

const buildStylesClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={styles.navMenu}>
      <NavLink className={buildStylesClass} to={'/'}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildStylesClass} to={'/contacts'}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
