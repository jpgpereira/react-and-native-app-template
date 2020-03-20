import React from 'react';
import styled from '@emotion/native';
import {t} from 'react-native-tailwindcss';

type SidebarProps = {
  show?: boolean;
};

const SideBarView = styled.SafeAreaView`
  ${[t.hFull, t.z10]}
`;

const Sidebar = styled.Text`
  ${[t.hFull, t.bgRed200, t.absolute]}
  ${props => (props.show ? t.flex : t.hidden)}
`;

export default ({show}: SidebarProps) => {
  return (
    <SideBarView>
      <Sidebar show={show}>sidebar</Sidebar>
    </SideBarView>
  );
};
