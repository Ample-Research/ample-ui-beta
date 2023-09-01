// ProtectedComponent.js
import React from 'react';
import SignUp from './SignUp';
import Container from './Container';

const ProtectedComponent = ({user}) => {
  if (user) {
    return <Container loggedIn={true}/>;
  } else {
    return <SignUp />;
  }
};

export default ProtectedComponent;
