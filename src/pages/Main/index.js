import React, { useState, useEffect, useCallback } from 'react';
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
  ImageContainer,
  CardCategory,
  CardCategoryButton,
  CategoryText,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/GoEat.png';
import api from '../../services/api';
import Footer from '../../components/Footer';
import AsyncStorage from '@react-native-community/async-storage';
import { useAuth } from '../../hooks/auth';

const Main = () => {
  const [productsCategories, setProductsCategories] = useState([]);
  const [totalTable, setTotalTable] = useState(0);
  const [flagToVacancy, setFlagToVacancy] = useState([]);
  const navigation = useNavigation();
  const { signOut, register, table } = useAuth();

  useEffect(() => {
    async function loadProductsCategories() {
      try {
        const response = await api.get('/category');

        const productCategory = response.data;
        setProductsCategories(productCategory);
      } catch (error) {
        console.log('Erro ao carregar categorias: ' + error);
      }
    }
    loadProductsCategories();
  }, []);

  useEffect(() => {
    async function listenFlagToVacancy() {
      const tableId = await AsyncStorage.getItem('@GoEats:table_id');
      const convertedTableId = JSON.parse(tableId);

      const response = await api.get('table/' + JSON.parse(tableId));

      const { flag_to_vacancy } = response.data;

      setFlagToVacancy(flag_to_vacancy);

      if (flag_to_vacancy === true) {
        Alert.alert(
          'Deseja desocupar a mesa?',
          'Você não possui mais débitos, caso queira permanecer é só pressionar "Ainda não"',
          [
            {
              text: 'Ainda não',
              onPress: () => editFlagToVacancyToFalse(convertedTableId),
              style: 'cancel',
            },
            {
              text: 'Sim, por favor',
              onPress: () => signOut(),
            },
          ],
          { cancelable: false },
        );
      }
    }

    listenFlagToVacancy();
  }, []);

  useEffect(() => {
    async function loadTotalTable() {
      try {
        const response = await api.get(`/table/total/${table}`);

        const { total } = response.data;
        setTotalTable(total);
      } catch (error) {
        console.log('Erro ao carregar o total da mesa: ' + error);
      }
    }
    setInterval(() => loadTotalTable(), 10000);
  }, [table]);

  function handleNavigateToDishes(categoria) {
    navigation.navigate('Dishes', { categoria: categoria });
  }

  async function iWannaPay() {
    try {
      Alert.alert('Aguarde enquanto algum garçom vem atendê-lo.');

      await api.put(`/register/payment/${register}`);
    } catch (error) {
      console.log('Algo deu errado ao tentar fazer o pagamento: ', error);
    }
  }

  function logout() {
    Alert.alert(
      'Sair do GoEats',
      'Deseja realmente sair?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelar'),
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

  function needToPay() {
    Alert.alert(
      'Deseja pagar?',
      'Só é possível deslogar após o pagamento da conta.',
      [
        {
          text: 'Agora não',
          onPress: () => console.log('Agora não'),
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => iWannaPay(),
        },
      ],
      { cancelable: false },
    );
  }

  const editFlagToVacancyToFalse = useCallback(
    async (id) => {
      const dataTable = {
        num: table,
        estado: 'Ocupada',
        flag_to_vacancy: false,
      };

      try {
        await api.post('table/update/' + id, dataTable);
      } catch (error) {
        console.log('Erro ao tentar editar a flag para false: ' + error);
      }
    },
    [table],
  );

  return (
    <Content>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity onPress={totalTable > 0 ? needToPay : logout}>
          <Icon name="log-out" size={24} style={{ color: '#fff' }} />
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
