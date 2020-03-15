import React from 'react';
import styled from 'styled-components';
import styles from './styles';

type TitleProps = {
  className?: string;
  text: string;
};

const Title = ({className, text}: TitleProps) => {
  return <h1 className={className}>{text}</h1>;
};

const StyledTitle = styled(Title)`
  ${styles}
`;

export default StyledTitle;
