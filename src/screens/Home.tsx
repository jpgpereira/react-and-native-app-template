import React from 'react';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';

import {AuthContext} from '../reducer/context';
import {actions as sidebarActions} from '../features/common/ui/sidebar';
import AppLayout from '../layouts/App';
import Title from '../components/Title';
import Button from '../components/Button';

const Home = ({openMenu, closeMenu}) => {
  const {signOut} = React.useContext(AuthContext);
  const {t} = useTranslation();
  return (
    <AppLayout>
      <Title text={t('screens.home.title')} />
      <Button
        text={t('buttons.authentication.signOut')}
        onPress={() => signOut()}
      />
      <Button text="Open Menu" onPress={openMenu} />
      <Button text="Close Menu" onPress={closeMenu} />
    </AppLayout>
  );
};

const {open, close} = sidebarActions;
const mapDispatchToProps = {
  openMenu: open,
  closeMenu: close,
};

export default connect(
  null,
  mapDispatchToProps,
)(Home);
