import React from 'react';
import tw from 'twin.macro';

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return <StyledHeader>header</StyledHeader>;
};

const StyledHeader = tw.div`
  w-full bg-blue-200 font-sans h-10
`;

export default Header;
