import React from 'react';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';

import AuthLayout from '../../layouts/Auth';
import {actions as authActions} from '../../features/auth/example';
import Title from '../../components/Title';
import Button from '../../components/Button';

const SignIn = ({navigation, signIn}) => {
  const {t} = useTranslation();
  return (
    <AuthLayout>
      <Title text={t('screens.signIn.title')} />
      <Button
        text={t('buttons.authentication.signUp')}
        onPress={() => navigation.push('SignUp')}
      />
      <Button text={t('buttons.authentication.signIn')} onPress={signIn} />
    </AuthLayout>
  );
};

const {signInExample} = authActions;
const mapDispatchToProps = {
  signIn: signInExample,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
