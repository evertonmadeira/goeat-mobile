import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #64002a;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  color: #fff;
  font-size: 24px;

  ${(props) =>
    props.isBlack &&
    css`
      color: #454345;
    `}
`;

export const Subtitle = styled.Text`
  font-family: 'Roboto-Regular';
  color: #fff;
  font-size: 14px;
  padding-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
  background: transparent;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const OrderContainer = styled.View`
  width: 100%;
  max-width: 260px;
  /* height: 232px; */
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  margin: 8px;

  align-items: flex-start;
  justify-content: space-between;
`;

// export const HeaderOrderContainer = styled.View`
//   width: 100%;
//   align-items: center;
//   justify-content: space-between;
// `;

export const OrderDetail = styled.View`
  flex: 1;
  width: 100%;
  max-width: 320px;
  /* height: 100%;
  max-height: 80px; */
  background: #fff;
  padding: 8px;
`;

export const TextContainer = styled.View`
  width: 100%;
  /* height: 100%; */
  flex-direction: row;
  padding: 2px;
`;

export const TextDetail = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  margin-left: 4px;
  color: #000;
`;

export const NameStatusOrderContainer = styled.View`
  width: 100%;
  max-width: 260px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const NumberOrderText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #454345;
  font-size: 20px;
`;

export const StatusContent = styled.View`
  width: 24px;
  height: 24px;
  background: #bdbbbc;

  align-items: center;
  justify-content: center;

  border-radius: 100px;
  border-color: #bdbbbc;

  ${(props) =>
    props.isCheck &&
    css`
      border-color: #48c936;
      background: #48c936;
    `}
`;

export const ConnectionBar = styled.View`
  width: 100%;
  max-width: 40px;
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
      color: #fff;
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
  font-size: 12px;
  text-align: left;
  /* margin-left: 8px; */
  color: #454345;

  /* ${(props) =>
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
    `} */
`;

export const TookOrder = styled(TouchableOpacity)`
  width: 100%;
  max-width: 124px;
  height: 50px;

  background: #48c936;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;
