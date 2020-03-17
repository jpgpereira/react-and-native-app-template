import React from 'react';
import {useHistory} from 'react-router-dom';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Button from '../../components/Button';

import {AuthContext} from '../../reducer/context';

const SignIn = () => {
  const {signUp} = React.useContext(AuthContext);
  const history = useHistory();
  return (
    <Container>
      <Title text="Sign Up" />
      <Button text="SignUp" onPress={() => signUp()} />
      <Button text="SignIn" onPress={() => history.goBack()} />
    </Container>
  );
};

export default SignIn;
