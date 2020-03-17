import React from 'react';
import {useHistory} from 'react-router-dom';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Button from '../../components/Button';

import {AuthContext} from '../../reducer/context';

const SignIn = () => {
  const {signIn} = React.useContext(AuthContext);
  const history = useHistory();
  return (
    <Container>
      <Title text="Sign In" />
      <Button text="SignUp" onPress={() => history.push('/sign-up')} />
      <Button text="SignIn" onPress={() => signIn()} />
    </Container>
  );
};

export default SignIn;
