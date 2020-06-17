import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Container, GoToContent } from './styles';
import Bag from '../../components/Bag';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  function handleNavigateTo(page) {
    navigation.navigate(page);
  }

  return (
    <Container>
      <GoToContent onPress={() => handleNavigateTo('Main')}>
        <Icon name="list" size={24} style={{ color: '#64002a' }} />
      </GoToContent>
      <GoToContent onPress={() => handleNavigateTo('Status')}>
        <Icon name="smartphone" size={24} style={{ color: '#64002a' }} />
      </GoToContent>
      <Bag />
    </Container>
  );
};

export default Footer;
