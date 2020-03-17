import React from 'react';
import {useTranslation} from 'react-i18next';

import Container from '../components/Container';
import Title from '../components/Title';
import Button from '../components/Button';

import {AuthContext} from '../reducer/context';

const Home = () => {
  const {signOut} = React.useContext(AuthContext);
  const {t} = useTranslation();
  return (
    <Container>
      <Title text={t('screens.home.title')} />
      <Button
        text={t('buttons.authentication.signOut')}
        onPress={() => signOut()}
      />
    </Container>
  );
};

export default Home;
