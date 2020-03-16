import React from 'react';
import styled from '@emotion/native';
import {t} from 'react-native-tailwindcss';

type ButtonProps = {
  text: string;
  onPress: any;
};

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  ${[t.rounded, t.bgBlue500, t.borderTransparent]}
`;

const ButtonText = styled.Text`
  ${[t.pY2, t.pX4, t.textWhite]}
`;

export default Button;
