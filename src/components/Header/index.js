import React from 'react';
import { View } from 'react-native';

import { Container, Title, BackButton } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Header = ({ children }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="chevron-left" size={30} style={{ color: '#64002a' }} />
      </BackButton>
      <Title>Meus pedidos</Title>
    </Container>
  );
};

export default Header;
