/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { FlatList, Image, View } from 'react-native';
import { useCart } from '../../hooks/cart';
import {
  Container,
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
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

const Dishes = () => {
  const { addToCart } = useCart();
  const [dishes, setDishes] = useState([]);
  const route = useRoute();

  const routeParams = route.params;

  useEffect(() => {
    async function loadDishes() {
      const response = await api.get(`/product/${routeParams.categoria}`);

      const dish = response.data;

      setDishes(dish);
    }
    try {
      loadDishes();
    } catch (error) {
      console.log(error);
    }
  }, [routeParams.categoria]);

  function handleAddToCart(item) {
    addToCart(item);
  }

  return (
    <Container>
      <Header>{routeParams.categoria}</Header>

      <DishContainer>
        <FlatList
          data={dishes}
          keyExtractor={(item) => String(item._id)}
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
                testID={`add-to-cart-${item._id}`}
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
      <Footer />
    </Container>
  );
};

export default Dishes;
