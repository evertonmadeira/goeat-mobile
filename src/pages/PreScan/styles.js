import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 40px;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  margin: 0 145px 10px 0;
`;

export const Hello = styled.Text`
  font-size: 28px;
  font-family: 'Roboto-Medium';
  color: #64002a;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
  color: #64002a;
`;

export const ScanButton = styled.TouchableOpacity`
  background: #64002a;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-top: 20px;

  align-items: center;
  justify-content: center;
`;
