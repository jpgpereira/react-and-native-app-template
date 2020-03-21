import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {connect} from 'react-redux';
import Screens from '../screens';
import {selectors as authSelectors} from '../features/auth';

const AuthRouter = () => (
  <Switch>
    <Route path="/sign-in">
      <Screens.SignIn />
    </Route>
    <Route path="/sign-up">
      <Screens.SignUp />
    </Route>
    <Redirect to="/sign-in" />
  </Switch>
);

const AppRouter = () => (
  <Switch>
    <Route path="/home">
      <Screens.Home />
    </Route>
    <Redirect to="/home" />
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
  const isLoggedIn = authSelectors.isLoggedIn(state);
  return {isLoggedIn};
};

export default connect(mapStateToProps)(Navigator);
