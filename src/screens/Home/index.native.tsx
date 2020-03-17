import React from 'react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Button from '../../components/Button';

import {AuthContext} from '../../reducer/context';

const Home = () => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <Container>
      <Title text="Home" />
      <Button text="Sign Out" onPress={() => signOut()} />
    </Container>
  );
};

export default Home;
