import React from 'react';
import styled from '@emotion/native';
import {t} from 'react-native-tailwindcss';
import Sidebar from '../../features/common/ui/sidebar/containers/Sidebar';
import Header from '../../components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = styled.SafeAreaView`
  ${[t.flex, t.flexRow, t.hFull, t.wFull]}
`;

const Container = styled.View`
  ${[t.flex, t.flex1, t.flexCol]}
`;

const Content = styled.View`
  ${[t.flex, t.flex1, t.flexCol, t.justifyCenter, t.itemsCenter]}
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
