import React from 'react';
import { useSelector } from 'react-redux';
import { selectErrorMessage } from '../../redux/contacts/selectors'; // закоментуйте шлях до селектора

const Error = () => {
  const errorMessage = useSelector(selectErrorMessage);

  return <div>{errorMessage}</div>;
};

export default Error;
