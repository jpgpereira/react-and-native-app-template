import styled from '@emotion/native';
import {t} from 'react-native-tailwindcss';

const Container = styled.View`
  ${[
    t.flex,
    t.flex1,
    t.flexCol,
    t.justifyCenter,
    t.itemsCenter,
    t.hFull,
    t.bgGreen200,
  ]}
`;

export default Container;
