import React from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import clsx from 'clsx';

const buildStylesClass = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={buildStylesClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildStylesClass}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
