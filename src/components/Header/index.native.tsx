import React from 'react';
import styled from '@emotion/native';
import {t} from 'react-native-tailwindcss';

const Header = () => {
  return <StyledHeader>header</StyledHeader>;
};

const StyledHeader = styled.Text`
  ${[t.wFull, t.bgBlue200, t.h10]}
`;

export default Header;
