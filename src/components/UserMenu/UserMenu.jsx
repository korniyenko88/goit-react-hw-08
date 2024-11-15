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
        <p>
          Welcome, <span>{user.name}!</span>
        </p>
      ) : (
        <p>Welcome, Guest!</p>
      )}
      <button type="button" onClick={() => dispatch(apiLogOutUser())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
