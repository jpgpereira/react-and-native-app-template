import React from 'react';
import tw from 'twin.macro';

type TitleProps = {
  text: string;
};

const Title = ({text}: TitleProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = tw.h1`
  font-bold
  m-0
  font-sans
  text-4xl
`;

export default Title;
