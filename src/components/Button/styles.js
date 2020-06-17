import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 300px;
  height: 50px;
  background: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #64002a;
  font-size: 15px;
`;
