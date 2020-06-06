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

export const CardCategory = styled.View`
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

export const ImageC = styled.Image`
  width: 80px;
  height: 80px;

  right: 40px;
  border-radius: 50px;
  border-width: 2px;
  border-color: #64002a;
`;

export const CardTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 22px;
  color: #454345;
`;

export const CountOptions = styled.Text`
  font-family: 'Roboto-Regular'
  font-size: 16px;
  color: #807d80;

`;

export const CardCategoryButton = styled.TouchableOpacity`
  background: #fff;
  width: 40px;
  height: 40px;
  border: 2px;
  border-color: #64002a;
  border-radius: 50px;

  align-items: center;
  justify-content: center;

  position: absolute;
  right: -20px;
`;

export const CategoryText = styled.View`
  position: absolute;
  left: 60px;
`;
