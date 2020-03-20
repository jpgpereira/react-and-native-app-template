import React from 'react';
import {useTranslation} from 'react-i18next';

import AuthLayout from '../layouts/Auth';
import Title from '../components/Title';

const Splash = () => {
  const {t} = useTranslation();
  return (
    <AuthLayout>
      <Title text={t('messages.loading')} />
    </AuthLayout>
  );
};

export default Splash;
