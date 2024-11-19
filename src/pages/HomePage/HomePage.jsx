import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome to your Phone Book!</h1>
      ) : (
        <>
          <h1>Welcome to the phone book!</h1>
          <h2>To continue, please log in or register an account!</h2>
        </>
      )}
    </div>
  );
};

export default HomePage;
