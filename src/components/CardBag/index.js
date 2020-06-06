import React, { useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';
import {
  Container,
  Image,
  CardTitle,
  Value,
  ButtonContainer,
  ActionButton,
  Quantity,
  BagText,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import pastaImg from '../../assets/pasta.jpg';

const CardBag = () => {
  return <View />;
};

export default CardBag;
