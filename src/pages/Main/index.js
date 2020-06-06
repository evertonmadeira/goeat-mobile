import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, Image, View } from 'react-native';
import {
  Container,
  Content,
  BagButton,
  Header,
  ImageC,
  CardTitle,
  CountOptions,
  CardCategory,
  CardCategoryButton,
  CategoryText,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';
import pastaImg from '../../assets/pasta.jpg';
import Bag from '../../components/Bag';

const Main = () => {
  const [productsCategories, setProductsCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadProductsCategories() {
      try {
        const response = await api.get('/product');

        const productCategory = response.data;
        setProductsCategories(productCategory);
      } catch (error) {
        console.log(error);
      }
    }

    loadProductsCategories();
  }, []);

  return (
    <Content>
      <Header>
        <Image source={logoImg} />
        <Bag />
      </Header>

      <FlatList
        data={productsCategories}
        keyExtractor={(item) => item.categoria}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ height: 50 }}
        renderItem={({ item }) => (
          <CardCategory>
            <ImageC source={pastaImg} />
            <CategoryText>
              <CardTitle>{item.categoria}</CardTitle>
              <CountOptions>15 opções</CountOptions>
            </CategoryText>

            <CardCategoryButton onPress={() => navigation.navigate('Dishes')}>
              <Icon
                name="chevron-right"
                size={24}
                style={{ color: '#64002a' }}
              />
            </CardCategoryButton>
          </CardCategory>
        )}
      />
    </Content>
  );
};

export default Main;
