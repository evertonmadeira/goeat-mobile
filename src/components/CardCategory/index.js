import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Image,
  CardTitle,
  CountOptions,
  CardCategoryButton,
  CategoryText,
} from './styles';
import pastaImg from '../../assets/pasta.jpg';

const CardCategory = () => {
  return (
    <Container>
      <Image source={pastaImg} />
      <CategoryText>
        <CardTitle>Massas</CardTitle>
        <CountOptions>15 opções</CountOptions>
      </CategoryText>

      <CardCategoryButton>
        <Icon name="chevron-right" size={24} style={{ color: '#64002a' }} />
      </CardCategoryButton>
    </Container>
  );
};

export default CardCategory;
