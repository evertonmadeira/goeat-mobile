import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;

  width: 100%;
  height: 46px;
  background: #fff;

  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 22px;
  color: #64002a;

  padding-left: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  background: transparent;
  height: 50px;
  width: 50px;

  justify-content: center;
  align-items: center;
`;
