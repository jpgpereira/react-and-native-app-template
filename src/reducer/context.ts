import React from 'react';

interface IAuthContext {
  signUp: () => void;
  signIn: () => void;
  signOut: () => void;
}

const initialState = {
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
};

export const AuthContext = React.createContext<IAuthContext>(initialState);
