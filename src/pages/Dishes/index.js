/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { FlatList, Image, View } from 'react-native';
import { useCart } from '../../hooks/cart';
import {
  Container,
  Header,
  ImageC,
  CardTitle,
  Description,
  DescriptionText,
  DishValue,
  DishContainer,
  CardDish,
  CardDishButton,
  DishText,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Bag from '../../components/Bag';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

const Dishes = () => {
  const { addToCart } = useCart();
  const [dishes, setDishes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadDishes() {
      const response = await api.get('/product');

      const dish = response.data;

      setDishes(dish);
    }
    try {
      loadDishes();
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleAddToCart(item) {
    addToCart(item);
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <Bag />
      </Header>

      <DishContainer>
        <FlatList
          data={dishes}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ height: 50 }}
          renderItem={({ item }) => (
            <CardDish>
              <ImageC source={{ uri: item.img.url }} />
              <DishText>
                <CardTitle>{item.nome}</CardTitle>
              </DishText>
              <Description>
                <DescriptionText>{item.descricao}</DescriptionText>
                <DishValue>{formatValue(item.preco)}</DishValue>
              </Description>

              <CardDishButton
                testID={`add-to-cart-${item.id}`}
                onPress={() => handleAddToCart(item)}
              >
                <Icon
                  name="shopping-cart"
                  size={20}
                  style={{ color: '#fff' }}
                />
              </CardDishButton>
            </CardDish>
          )}
        />
      </DishContainer>
    </Container>
  );
};

export default Dishes;
