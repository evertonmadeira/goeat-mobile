import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background: #64002a;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  color: #fff;
  font-size: 24px;
`;

export const Subtitle = styled.Text`
  font-family: 'Roboto-Regular';
  color: #fff;
  font-size: 16px;
`;

export const Content = styled.View`
  flex-direction: row;
  padding: 0 30px;

  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
`;

export const StatusContent = styled.View`
  width: 70px;
  height: 70px;
  background: #fff;

  align-items: center;
  justify-content: center;

  border-radius: 100px;
  border-width: 3px;
  border-color: #bdbbbc;

  ${(props) =>
    props.isCheck &&
    css`
      border-color: #48c936;
      background: #9effbe;
    `}
`;

export const ConnectionBar = styled.View`
  width: 100%;
  max-width: 25px;
  height: 5px;
  position: relative;

  background: #bdbbbc;

  ${(props) =>
    props.isCheck &&
    css`
      background: #48c936;
    `}
`;

export const Icons = styled(Icon)`
  color: #bdbbbc;

  ${(props) =>
    props.isCheck &&
    css`
      color: #48c936;
    `}
`;

export const StatusContainer = styled.View`
  flex: 1;

  height: 100%;
  max-height: 80px;
  width: 100%;
  max-width: 160px;

  background: #fff;

  align-items: center;
  justify-content: center;

  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;

export const OrderContent = styled.View`
  flex-wrap: wrap;
`;
export const StatusTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  color: #454345;
  padding-bottom: 6px;
`;
export const StatusText = styled.Text`

  font-family: 'Roboto-Regular';
  font-size: 24px;
  text-align: left;

  ${(props) =>
    props.isOpened &&
    css`
      color: #c93636;
    `}
  ${(props) =>
    props.isMaking &&
    css`
      color: #0d59ff;
    `}
  ${(props) =>
    props.isCheck &&
    css`
      color: #48c936;
    `}
`;
export const Item = styled.Text``;
