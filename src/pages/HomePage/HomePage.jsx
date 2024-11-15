import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div>
      {isLoggedIn ? (
        <h1 className={clsx(css.h1)}>
          <span>👤</span> Hi {user.name}, Welcome to your Phone Book!{' '}
          <span>📞</span>
        </h1>
      ) : (
        <>
          <h1 className={clsx(css.h1)}>
            <span>👤</span> Welcome to the phone book! <span>📞</span>
          </h1>
          <h2>Please log in to your account or register!</h2>
        </>
      )}
    </div>
  );
};

export default HomePage;