import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import styles from './styles';

type TitleProps = {
  style?: object;
  text: string;
};

const Title = ({style, text}: TitleProps) => {
  return <Text style={style}>{text}</Text>;
};

const StyledTitle = styled(Title)`
  ${styles}
  font-size: 48px;
`;

export default StyledTitle;
