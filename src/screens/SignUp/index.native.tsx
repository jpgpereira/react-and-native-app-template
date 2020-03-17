import React from 'react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Button from '../../components/Button';

import {AuthContext} from '../../reducer/context';

const SignUp = ({navigation}) => {
  const {signUp} = React.useContext(AuthContext);
  return (
    <Container>
      <Title text="Sign Up" />
      <Button text="SignUp" onPress={() => signUp()} />
      <Button text="SignIn" onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default SignUp;
