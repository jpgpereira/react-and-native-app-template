import React from 'react';
import Container from '../components/Container';
import Title from '../components/Title';
import Button from 'src/components/Button';

import {AuthContext} from '../reducer/context';

const SignIn = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  return (
    <Container>
      <Title text="Sign In" />
      <Button text="SignUp" onPress={() => navigation.push('SignUp')} />
      <Button text="SignIn" onPress={() => signIn()} />
    </Container>
  );
};

export default SignIn;
