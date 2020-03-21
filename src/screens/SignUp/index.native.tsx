import React from 'react';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';

import AuthLayout from '../../layouts/Auth';
import {actions as authActions} from '../../features/auth/example';
import Title from '../../components/Title';
import Button from '../../components/Button';

const SignUp = ({navigation, signUp}) => {
  const {t} = useTranslation();
  return (
    <AuthLayout>
      <Title text={t('screens.signUp.title')} />
      <Button text={t('buttons.authentication.signUp')} onPress={signUp} />
      <Button
        text={t('buttons.authentication.signIn')}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  );
};

const {signUpExample} = authActions;
const mapDispatchToProps = {
  signUp: signUpExample,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
