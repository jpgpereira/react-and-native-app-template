import React from 'react';
import {useHistory} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import AuthLayout from '../../layouts/Auth';
import Title from '../../components/Title';
import Button from '../../components/Button';

import {AuthContext} from '../../reducer/context';

const SignUp = () => {
  const {signUp} = React.useContext(AuthContext);
  const history = useHistory();
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
        onPress={() => history.goBack()}
      />
    </AuthLayout>
  );
};

export default SignUp;
