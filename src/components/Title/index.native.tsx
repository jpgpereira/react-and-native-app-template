import React from 'react';
import styled from '@emotion/native';
import {t} from 'react-native-tailwindcss';

type TitleProps = {
  text: string;
};

const Title = ({text}: TitleProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.Text`
  ${[t.fontBold, t.m0, t.text4xl]}
`;

export default Title;
