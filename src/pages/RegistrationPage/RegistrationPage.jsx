import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors';


const RegistrationPage = () => {
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <div>
      <div>
        {loader && <Loader />}
        {error === 'Unable to fetch user' && (
          <p>Please register or log in to your account</p>
        )}
        {error === 400 && <p>User registration error</p>}
      </div>
      <div >
        <RegistrationForm />
      </div>
    </div>
  );
};
export default RegistrationPage;
