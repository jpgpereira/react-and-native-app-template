import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AuthContext} from '../reducer/context';

import Screens from '../screens';

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

const MainRouter = ({userToken}) => {
  return <Router>{userToken ? <AppRouter /> : <AuthRouter />}</Router>;
};

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState('');

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken('');
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Screens.Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <MainRouter userToken={userToken} />
    </AuthContext.Provider>
  );
};
