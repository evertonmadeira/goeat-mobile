import React from 'react';
import { View } from 'react-native';

import { Container, Title, BackButton } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Header = ({ children }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
};

export default Header;
