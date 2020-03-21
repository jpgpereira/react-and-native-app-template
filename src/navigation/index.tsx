import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Screens from '../screens';
import {selectors as authSelectors} from '../features/auth';

const AuthRouter = () => (
  <Switch>
    <Route path="/sign-up">
      <Screens.SignUp />
    </Route>
    <Route path="/">
      <Screens.SignIn />
    </Route>
  </Switch>
);

const AppRouter = () => (
  <Switch>
    <Route path="/">
      <Screens.Home />
    </Route>
  </Switch>
);

const MainRouter = ({isLoggedIn}) => {
  return <Router>{isLoggedIn ? <AppRouter /> : <AuthRouter />}</Router>;
};

const Navigator = ({rehydrated, isLoggedIn}) => {
  if (!rehydrated) {
    return <Screens.Splash />;
  }

  return <MainRouter isLoggedIn={isLoggedIn} />;
};

const mapStateToProps = state => {
  console.log(state);
  const isLoggedIn = authSelectors.isLoggedIn(state);
  return {isLoggedIn};
};

export default connect(mapStateToProps)(Navigator);
