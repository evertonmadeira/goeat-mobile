import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Content,
  Header,
  ImageC,
  CardTitle,
  CountOptions,
  ImageContainer,
  CardCategory,
  CardCategoryButton,
  CategoryText,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/GoEat.png';
import api from '../../services/api';
import pastaImg from '../../assets/pasta.jpg';
import Footer from '../../components/Footer';
import AsyncStorage from '@react-native-community/async-storage';
import { useAuth } from '../../hooks/auth';

const Main = () => {
  const [productsCategories, setProductsCategories] = useState([]);
  const [table, setTable] = useState([]);
  const [count, setCount] = useState([]);
  const navigation = useNavigation();
  const { signOut } = useAuth();

  useEffect(() => {
    async function loadTable() {
      try {
        const data = await AsyncStorage.getItem('@GoEats:table');
        setTable(JSON.parse(data));
      } catch (error) {
        console.log(error);
      }
    }
    loadTable();
  }, []);

  async function loadProductsCategories() {
    try {
      const response = await api.get('/category');

      const productCategory = response.data;
      setProductsCategories(productCategory);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadProductsCategories();
  }, []);

  // useEffect(() => {
  //   async function loadCount(category) {
  //     try {
  //       const response = await api.get(`/product/count/${category}`);

  //       const countItem = response.data;
  //       setCount(countItem);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   loadCount();
  // }, []);

  function handleNavigateToDishes(categoria) {
    navigation.navigate('Dishes', { categoria: categoria });
  }

  function logout() {
    Alert.alert(
      'Sair do GoEats',
      'Deseja realmente sair?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => signOut(),
        },
      ],
      { cancelable: false },
    );
  }

  return (
    <Content>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity onPress={logout}>
          <Icon name="power" size={24} style={{ color: '#fff' }} />
        </TouchableOpacity>
      </Header>
      <Text style={{ color: '#fff', fontSize: 24, paddingLeft: 50 }}>
        Mesa #{table}
      </Text>
      <FlatList
        data={productsCategories}
        keyExtractor={(item) => String(item._id)}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ height: 20 }}
        renderItem={({ item }) => (
          <CardCategory>
            <ImageContainer>
              <ImageC source={{ uri: item.img.url }} />
            </ImageContainer>
            <CategoryText>
              <CardTitle>{item.nome}</CardTitle>
              {/* <CountOptions>10 opções</CountOptions> */}
            </CategoryText>

            <CardCategoryButton
              onPress={() => handleNavigateToDishes(item.nome)}
            >
              <Icon
                name="chevron-right"
                size={24}
                style={{ color: '#64002a' }}
              />
            </CardCategoryButton>
          </CardCategory>
        )}
      />
      <Footer />
    </Content>
  );
};

export default Main;
