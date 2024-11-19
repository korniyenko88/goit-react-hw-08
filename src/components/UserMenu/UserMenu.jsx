import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogOutUser } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css'
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenu}>
      {user ? (
        <p className={styles.userMenuText}>
          Welcome, <span>{user.name}!</span>
        </p>
      ) : (
        <p className={styles.userMenuText}>Welcome, Guest!</p>
      )}
      <button className={styles.menuBtn} type="button" onClick={() => dispatch(apiLogOutUser())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
