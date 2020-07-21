import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const tookOrder = css`
  background: #48c936;
`;

export const Container = styled(RectButton)`
  width: 300px;
  height: 50px;
  background: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  ${(props) => props.tookOrder && tookOrder}
`;
export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #64002a;
  font-size: 15px;
`;
