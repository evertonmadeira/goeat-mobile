import React from 'react';
import { View } from 'react-native';
import { Container, Content, Description, Hello, ScanButton } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import qrScan from '../../assets/qr-code-scan.json';
import { useAuth } from '../../hooks/auth';

const PreScan = () => {
  const { nome } = useAuth();
  const navigation = useNavigation();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Container>
      <Content>
        <Hello>Olá, {capitalizeFirstLetter(nome)}!</Hello>
      </Content>
      <Lottie
        source={qrScan}
        style={{ marginBottom: 20 }}
        resizeMode="contain"
        autoSize
        autoPlay
      />
      <View>
        <Description>
          Para fazer um pedido basta ler o QR Code que está sobre a mesa.
        </Description>
      </View>
      <ScanButton onPress={() => navigation.navigate('Scan')}>
        <Icon name="camera" size={32} style={{ color: '#fff' }} />
      </ScanButton>
    </Container>
  );
};

export default PreScan;
