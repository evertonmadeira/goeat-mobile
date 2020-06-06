import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 15px 0 18px;
`;

export const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;

  background: #64002a;
`;

export const DishContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CardDish = styled.View`
  height: 300px;
  width: 300px;
  align-items: center;
  justify-content: space-between;

  margin: 10px;

  background: #fff;
  border-radius: 6px;
`;

export const ImageC = styled.Image`
  width: 100%;
  height: 200px;

  border-radius: 6px;
  /* border: 2px;
  border-color: #64002a; */
`;

export const CardTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 22px;
  color: #454345;
`;

export const DishValue = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 20px;
  color: #1dcc28;
  padding: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const CardDishButton = styled.TouchableOpacity`
  background: #64002a;
  width: 50px;
  height: 50px;
  border: 2px;
  border-color: #fff;
  border-radius: 50px

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 10px;
  bottom: 75px;
`;

export const DishText = styled.View`
  /* background: #000; */
  align-items: flex-start;
  justify-content: center;
  padding: 8px;
  height: 40px;
  width: 100%;

  border-bottom-width: 0.3px;
  border-bottom-color: #b5b0b1;
`;

export const Description = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  padding: 0 12px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DescriptionText = styled.Text`
  max-width: 210px;
  font-family: 'Roboto-Regular';
  color: #615c5d
  font-size: 16px;
  text-align: left;
`;

export const DescriptionButton = styled.TouchableOpacity`
  width: 100%;
  background: #000;
`;
