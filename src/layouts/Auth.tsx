import React from 'react';
import Container from '../components/Container';

type LayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({children}: LayoutProps) => {
  return <Container>{children}</Container>;
};

export default AuthLayout;
