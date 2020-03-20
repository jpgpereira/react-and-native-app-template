import React from 'react';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

type SidebarProps = {
  show?: boolean;
};

const Sidebar = styled.div`
  ${tw`h-full bg-red-200 font-sans hidden xs:block sm:block md:block lg:block`}
  ${(props: SidebarProps) =>
    props.show &&
    tw`block! absolute xs:relative sm:relative md:relative lg:relative`}
`;

export default ({show}: SidebarProps) => {
  return <Sidebar show={show}>sidebar</Sidebar>;
};
