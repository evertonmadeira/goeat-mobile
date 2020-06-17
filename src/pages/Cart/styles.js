import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
  font-family: 'Roboto-Medium';
  font-size: 22px;
  color: #fff;
`;

export const CardFooter = styled(Animated.View)`
  background: #fff;
  height: 100%;
  max-height: 235px;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 420px;
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

export const Bag = styled.View`
  height: 100px;
  width: 280px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0 0 50px;

  background: #fff;
  border: 1px;
  border-color: #64002a;
  border-radius: 6px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  background: #9e999b;

  right: 40px;
  border-radius: 50px;
  border-width: 2px;
  border-color: #64002a;
`;

export const CardTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 22px;
  max-width: 190px;
  color: #454345;
`;

export const Value = styled.Text`
  font-family: 'Roboto-Regular'
  font-size: 16px;
  color: #1dcc28;

`;

export const ButtonContainer = styled.View`
  background: #fff;
  width: 40px;
  height: 90px;

  border: 2px;
  border-color: #64002a;
  border-radius: 50px;

  align-items: center;
  justify-content: space-between;

  position: absolute;
  right: -20px;
`;

export const CardButton = styled.TouchableOpacity`
  background: transparent;
`;

export const Quantity = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
`;

export const BagText = styled.View`
  position: absolute;
  left: 60px;
`;

export const ItemList = styled(FlatList)`
  width: 100%;
`;
