import React from 'react';
import { View, Text, FlatList, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  Container,
  Title,
  BackButton,
  CardFooter,
  Minus,
  Content,
  ContentText,
  ActionButton,
} from './styles';
import CardBag from '../../components/CardBag';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import Lottie from 'lottie-react-native';
import emptyBag from '../../assets/empty-bag.json';

const Cart = () => {
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

  const onHandlerStateChange = (event) => {
    console.log('Hello');
  };

  return (
    <>
      <Header />
      <Container>
        {/* <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(element) => String(element)}
        renderItem={() => <CardBag />}
      /> */}

        <Lottie
          source={emptyBag}
          style={{ marginBottom: 20 }}
          resizeMode="contain"
          autoSize
          autoPlay
        />
        <Title>Sua sacola está vazia</Title>
        <Text style={{ color: '#fff', fontSize: 16 }}>
          Volte ao menu principal para fazer um pedido
        </Text>

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
            {/* <Minus /> */}
            <Icon name="chevron-up" size={20} style={{ color: '#64002a' }} />
            <Content>
              <ContentText>Quantidade:</ContentText>
              <ContentText onValue>10</ContentText>
            </Content>
            <Content>
              <ContentText>Subtotal:</ContentText>
              <ContentText onValue>R$ 150,00</ContentText>
            </Content>
            <Content>
              <ContentText>Taxas</ContentText>
              <ContentText onValue>R$ 0,00</ContentText>
            </Content>
            <Content>
              <ContentText>Total:</ContentText>
              <ContentText onValue>R$ 150,00</ContentText>
            </Content>
            <Content>
              <ActionButton isCancel>
                <Icon name="trash-2" size={22} style={{ color: '#fff' }} />
                {/* <ContentText>Cancelar</ContentText> */}
              </ActionButton>
              <ActionButton isCheck>
                <Icon name="check" size={22} style={{ color: '#fff' }} />
                {/* <ContentText>Finalizar</ContentText> */}
              </ActionButton>
            </Content>
          </CardFooter>
        </PanGestureHandler>
      </Container>
    </>
  );
};

export default Cart;
