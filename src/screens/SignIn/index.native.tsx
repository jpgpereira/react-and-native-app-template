import React from 'react';
import {useTranslation} from 'react-i18next';

import AuthLayout from '../../layouts/Auth';
import Title from '../../components/Title';
import Button from '../../components/Button';

import {AuthContext} from '../../reducer/context';

const SignIn = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  const {t} = useTranslation();
  return (
    <AuthLayout>
      <Title text={t('screens.signIn.title')} />
      <Button
        text={t('buttons.authentication.signUp')}
        onPress={() => navigation.push('SignUp')}
      />
      <Button
        text={t('buttons.authentication.signIn')}
        onPress={() => signIn()}
      />
    </AuthLayout>
  );
};

export default SignIn;
