import React from 'react';
import {useTranslation} from 'react-i18next';

import Container from '../components/Container';
import Title from '../components/Title';

const Splash = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Title text={t('messages.loading')} />
    </Container>
  );
};

export default Splash;
