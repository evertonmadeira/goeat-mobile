import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const focused = css`
  border-color: #fff;
`;

const errored = css`
  border-color: #c53030;
`;

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #3d001a;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #3d001a;
  flex-direction: row;
  align-items: center;

  ${(props) => props.isErrored && errored}
  ${(props) => props.isFocused && focused}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 15px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 15px;
`;
