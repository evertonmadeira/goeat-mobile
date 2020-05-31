import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';

const onValue = css`
  color: #454345;
`;

const check = css`
  background: #48c936;
`;

const cancel = css`
  background: #c93636;
`;

export const Container = styled.View`
  flex: 1;
  background: #64002a;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 22px;
  color: #fff;
`;

export const CardFooter = styled(Animated.View)`
  background: #fff;
  height: 100%;
  max-height: 230px;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  /* border-radius: 6px; */
  /* border: 1px; */
  /* border-top-color: #fff; */

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /**top: de 520 para 370*/
  top: 470px;
`;

export const Minus = styled.View`
  width: 100%;
  max-width: 60px;
  margin: 8px 0 5px;
  height: 2px;

  background: #fff;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ContentText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #807d80;

  margin: 0 10px 0;

  ${(props) => props.onValue && onValue}
`;

export const ActionButton = styled.TouchableOpacity`
  background: #fff;
  width: 80px;
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  margin: 10px;

  ${(props) => props.isCheck && check}
  ${(props) => props.isCancel && cancel}
`;
