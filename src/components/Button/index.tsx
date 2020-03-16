import React from 'react';
import tw from 'twin.macro';

type ButtonProps = {
  className?: string;
  text: string;
  onPress: () => void;
};

const Button = ({className, text, onPress}: ButtonProps) => {
  return (
    <StyledButton onClick={onPress} className={className}>
      {text}
    </StyledButton>
  );
};

const StyledButton = tw.button`
  text-white
  bg-blue-500
  border-transparent
  font-sans
  py-2
  px-4
  hover:bg-blue-700
  rounded
`;

export default Button;
