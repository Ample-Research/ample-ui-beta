import React from 'react';
import SignUp from './SignUp';
import Container from '../Layout/Container';

const ProtectedComponent = ({user}) => {
  if (user) {
    return <Container user={user} loggedIn={true}/>;
  } else {
    return <SignUp />;
  }
};

export default ProtectedComponent;
