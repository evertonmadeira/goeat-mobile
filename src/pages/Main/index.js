import React from 'react';
import { FlatList, SafeAreaView, Image } from 'react-native';
import CardCategory from '../../components/CardCategory';
import { Container, Content, BagButton, Header } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

const Main = () => {
  const navigation = useNavigation();

  return (
    <Content>
      <Header>
        <Image source={logoImg} />
        <BagButton onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-bag" size={24} style={{ color: '#fff' }} />
        </BagButton>
      </Header>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(element) => String(element)}
        renderItem={() => <CardCategory />}
      />
    </Content>
  );
};

export default Main;
