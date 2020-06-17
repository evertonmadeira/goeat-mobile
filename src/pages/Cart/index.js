/* eslint-disable react-native/no-inline-styles */
import React, { useMemo, useState } from 'react';
import { Text, Animated, Alert } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';
import {
  Container,
  Title,
  CardFooter,
  Content,
  ContentText,
  ActionButton,
  Bag,
  Image,
  CardTitle,
  Value,
  ButtonContainer,
  CardButton,
  Quantity,
  BagText,
  ItemList,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Lottie from 'lottie-react-native';
import emptyBag from '../../assets/empty-bag.json';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const { increment, decrement, products, removeToCart } = useCart();

  const navigation = useNavigation();

  let offset = -182;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function handleIncrement(id) {
    increment(id);
  }

  function handleDecrement(id) {
    decrement(id);
  }

  function handleRemove() {
    removeToCart();
  }

  const cartTotal = useMemo(() => {
    const total = products.reduce((acc, product) => {
      acc += Number(product.preco * product.quantity);

      return acc;
    }, 0);

    return formatValue(Number(total));
  }, [products]);

  const totalItensInCart = useMemo(() => {
    // TODO RETURN THE SUM OF THE QUANTITY OF THE PRODUCTS IN THE CART
    const total = products.reduce((acc, product) => {
      acc += Number(product.quantity);

      return acc;
    }, 0);

    return Number(total);
  }, [products]);

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
      }

      Animated.timing(translateY, {
        toValue: opened ? 470 : -182,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 470 : -182;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  const handleSubmitOrder = async () => {
    try {
      const data = [...products];
      const status = 'Aberto';
      const table = await AsyncStorage.getItem('@GoEats:table');

      const order = data.map((item, i) => {
        return {
          quantity: item.quantity,
          nome: item.nome,
          preco: item.preco,
        };
      });

      await api.post('/order', {
        mesa: table,
        status: status,
        pedidos: order,
        total: 0,
      });

      removeToCart();
      navigation.navigate('Status');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao realizar pedido', 'Tente novamente');
    }
  };

  return (
    <>
      <Header>Pedidos</Header>
      <Container>
        {products == 0 && (
          <>
            <Lottie
              source={emptyBag}
              style={{ marginBottom: 20 }}
              resizeMode="contain"
              autoSize
              autoPlay
            />
            <Title>Sua bag está vazia</Title>
            <Text style={{ color: '#fff', fontSize: 16 }}>
              Volte ao menu principal para fazer um pedido
            </Text>
          </>
        )}

        {products != 0 && (
          <ItemList
            data={products}
            keyExtractor={(item) => String(item.nome)}
            renderItem={({ item }) => (
              <Bag>
                <Image source={{ uri: item.img.url }} />
                <BagText>
                  <CardTitle>{item.nome}</CardTitle>
                  <Value>{formatValue(item.preco * item.quantity)}</Value>
                </BagText>

                <ButtonContainer>
                  <CardButton
                    testID={`decrement-${item._id}`}
                    onPress={() => handleIncrement(item._id)}
                  >
                    <Icon name="plus" size={24} style={{ color: '#64002a' }} />
                  </CardButton>
                  <Quantity>{item.quantity}</Quantity>
                  <CardButton
                    testID={`decrement-${item._id}`}
                    onPress={() => handleDecrement(item._id)}
                  >
                    <Icon name="minus" size={24} style={{ color: '#64002a' }} />
                  </CardButton>
                </ButtonContainer>
              </Bag>
            )}
          />
        )}

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <CardFooter
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-182, 0, 0],
                    outputRange: [-182, 0, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <Icon name="chevron-up" size={20} style={{ color: '#64002a' }} />
            <Content>
              <ContentText>Quantidade:</ContentText>
              <ContentText onValue>{totalItensInCart}</ContentText>
            </Content>
            <Content>
              <ContentText>Subtotal:</ContentText>
              <ContentText onValue>{cartTotal}</ContentText>
            </Content>
            <Content>
              <ContentText>Taxas</ContentText>
              <ContentText onValue>R$ 0,00</ContentText>
            </Content>
            <Content>
              <ContentText>Total:</ContentText>
              <ContentText onValue>{cartTotal}</ContentText>
            </Content>
            <Content>
              <ActionButton isCancel onPress={handleRemove}>
                <Icon name="x" size={22} style={{ color: '#fff' }} />
                {/* <ContentText>Cancelar</ContentText> */}
              </ActionButton>
              <ActionButton isCheck onPress={handleSubmitOrder}>
                <Icon name="check" size={22} style={{ color: '#fff' }} />
                {/* <ContentText>Finalizar</ContentText> */}
              </ActionButton>
            </Content>
          </CardFooter>
        </PanGestureHandler>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
