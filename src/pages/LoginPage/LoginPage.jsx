import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  return (
    <div>
      {' '}
      <div>
        {loader && <Loader />}
        {error === 'Unable to fetch user' && (
          <p>Please register or log in to your account</p>
        )}
        {error === 400 && <p>Incorrect login or password</p>}
      </div>
      <div>
        <LoginForm />
        <Toaster />
      </div>
    </div>
  );
};

export default LoginPage;
