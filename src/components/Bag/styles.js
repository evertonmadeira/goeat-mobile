import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: transparent;
  height: 100%;
  width: 130px;

  justify-content: center;
  align-items: center;
`;

export const Notification = styled.View`
  width: 15px;
  height: 15px;
  background: #ff1212;
  border-radius: 50px;

  align-items: center;
  justify-content: center;

  position: absolute;
  top: 8px;
  right: 48px;
`;
