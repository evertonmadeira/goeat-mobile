import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Container, Content, Description, Hello, ScanButton } from './styles';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const PreScan = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadName() {
      // Não entendi muito bem a lógica do getItem nesse trecho
      const name = await AsyncStorage.getItem('@GoEats:user');
      // Caso exista o objeto JSON será repassado ao Array de produtos
      console.log(name);
      if (name[1]) {
        setData({ name: JSON.parse(name) });
      }
    }

    loadName();
  }, []);

  return (
    <Container>
      <Content>
        <Hello>Olá, {data.name}! :)</Hello>
      </Content>

      <View>
        <Description>
          Para fazer um pedido bastar ler o QR Code que está sobre a mesa.
        </Description>
      </View>
      <ScanButton onPress={() => navigation.navigate('Scan')}>
        <Icon name="camera" size={32} style={{ color: '#fff' }} />
      </ScanButton>
    </Container>
  );
};

export default PreScan;
