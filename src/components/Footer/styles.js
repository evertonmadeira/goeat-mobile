import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex-direction: row;

  height: 50px;
  width: 100%;
  background: #fff;

  align-items: center;
  justify-content: center;
`;

export const GoToContent = styled(TouchableOpacity)`
  width: 130px;

  align-items: center;
  justify-content: center;
`;
