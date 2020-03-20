import React from 'react';
import tw from 'twin.macro';
import Sidebar from '../../features/common/ui/sidebar/containers/Sidebar';
import Header from '../../components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = tw.div`
  flex
  flex-row
  h-screen
  w-screen
`;

const Container = tw.div`
  flex
  flex-1
  flex-col
`;

const Content = tw.div`
  flex
  flex-1
  flex-col
  justify-center
  items-center
`;

export default ({children}: LayoutProps) => {
  return (
    <Layout>
      <Sidebar show />
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </Layout>
  );
};
