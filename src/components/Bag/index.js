/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState, useMemo } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Container, Notification } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useCart } from '../../hooks/cart';

const Bag = () => {
  const { products } = useCart();
  // const [hasOrder, setHasOrder] = useState();
  const navigation = useNavigation();

  // useEffect(() => {
  //   async function loadProducts() {
  //     // Não entendi muito bem a lógica do getItem nesse trecho
  //     const cart = await AsyncStorage.getItem('@GoEats:cart');
  //     // Caso exista o objeto JSON será repassado aao Array de produtos
  //     if (cart) {
  //       setHasOrder(cart);
  //     }
  //   }

  //   try {
  //     loadProducts();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const totalItensInCart = useMemo(() => {
    // TODO RETURN THE SUM OF THE QUANTITY OF THE PRODUCTS IN THE CART
    const total = products.reduce((acc, product) => {
      acc += Number(product.quantity);

      return acc;
    }, 0);

    return Number(total);
  }, [products]);

  return (
    <Container onPress={() => navigation.navigate('Cart')}>
      <Icon name="shopping-bag" size={24} style={{ color: '#fff' }} />

      {products != 0 && (
        <Notification>
          <Text style={{ fontSize: 10, color: '#fff', flex: 1 }}>
            {totalItensInCart}
          </Text>
        </Notification>
      )}
    </Container>
  );
};

export default Bag;
