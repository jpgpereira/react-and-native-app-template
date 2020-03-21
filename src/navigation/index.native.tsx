import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Screens from '../screens';
import {selectors as authSelectors} from '../features/auth';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen
      name="SignIn"
      component={Screens.SignIn}
      options={{title: 'Sign In'}}
    />
    <AuthStack.Screen
      name="SignUp"
      component={Screens.SignUp}
      options={{title: 'Sign Up'}}
    />
  </AuthStack.Navigator>
);

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={Screens.Home} />
  </HomeStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({isLoggedIn}) => (
  <RootStack.Navigator headerMode="none">
    {isLoggedIn ? (
      <RootStack.Screen
        name="App"
        component={HomeStackScreen}
        options={{animationEnabled: false}}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{animationEnabled: false}}
      />
    )}
  </RootStack.Navigator>
);

const Navigator = ({rehydrated, isLoggedIn}) => {
  if (!rehydrated) {
    return <Screens.Splash />;
  }

  return (
    <NavigationContainer>
      <RootStackScreen isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  const isLoggedIn = authSelectors.isLoggedIn(state);
  return {isLoggedIn};
};

export default connect(mapStateToProps)(Navigator);
