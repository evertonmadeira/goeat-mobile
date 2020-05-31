import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Image,
  CardTitle,
  Value,
  ButtonContainer,
  ActionButton,
  Quantity,
  BagText,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import pastaImg from '../../assets/pasta.jpg';

const CardBag = () => {
  return (
    <Container>
      <Image source={pastaImg} />
      <BagText>
        <CardTitle>Lasanha</CardTitle>
        <Value>R$ 30,00</Value>
      </BagText>

      <ButtonContainer>
        <ActionButton>
          <Icon name="plus" size={24} style={{ color: '#64002a' }} />
        </ActionButton>
        <Quantity>3</Quantity>
        <ActionButton>
          <Icon name="minus" size={24} style={{ color: '#64002a' }} />
        </ActionButton>
      </ButtonContainer>
    </Container>
  );
};

export default CardBag;
