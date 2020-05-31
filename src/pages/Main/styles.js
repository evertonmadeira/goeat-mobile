import styled from 'styled-components/native';

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
  padding: 10px 15px 0 18px;
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;

  background: #64002a;
`;

export const BagButton = styled.TouchableOpacity`
  background: transparent;
  height: 50px;
  width: 50px;

  justify-content: center;
  align-items: center;
`;
