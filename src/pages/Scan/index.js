import React from 'react';
import { Container } from './styles';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useAuth } from '../../hooks/auth';
import { AsyncStorage } from 'react-native';

const Scan = () => {
  const { occupiedTable } = useAuth();

  async function onSuccess(e) {
    const table_id = e.data;
    occupiedTable(table_id);

    await AsyncStorage.setItem('@GoEats:table_id', JSON.stringify(table_id));
  }

  return (
    <Container>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        showMarker={true}
        checkAndroid6Permissions={true}
      />
    </Container>
  );
};

export default Scan;
