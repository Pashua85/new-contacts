import React from 'react';
import {Container} from './style';
import LoginForm from '../login-form/login-form';

const Login: React.FC<{}> = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

export default Login;