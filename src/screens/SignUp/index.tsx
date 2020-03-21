import React from 'react';
import {useHistory} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';

import AuthLayout from '../../layouts/Auth';
import {actions as authActions} from '../../features/auth/example';
import Title from '../../components/Title';
import Button from '../../components/Button';

const SignUp = ({signUp}) => {
  const history = useHistory();
  const {t} = useTranslation();

  return (
    <AuthLayout>
      <Title text={t('screens.signUp.title')} />
      <Button text={t('buttons.authentication.signUp')} onPress={signUp} />
      <Button
        text={t('buttons.authentication.signIn')}
        onPress={() => history.goBack()}
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
