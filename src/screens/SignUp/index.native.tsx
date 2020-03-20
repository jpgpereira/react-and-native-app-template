import React from 'react';
import {useTranslation} from 'react-i18next';

import AuthLayout from '../../layouts/Auth';
import Title from '../../components/Title';
import Button from '../../components/Button';

import {AuthContext} from '../../reducer/context';

const SignUp = ({navigation}) => {
  const {signUp} = React.useContext(AuthContext);
  const {t} = useTranslation();
  return (
    <AuthLayout>
      <Title text={t('screens.signUp.title')} />
      <Button
        text={t('buttons.authentication.signUp')}
        onPress={() => signUp()}
      />
      <Button
        text={t('buttons.authentication.signIn')}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  );
};

export default SignUp;
