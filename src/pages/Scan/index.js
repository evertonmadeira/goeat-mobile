import React from 'react';
import { Container } from './styles';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useAuth } from '../../hooks/auth';

const Scan = () => {
  const { occupiedTable } = useAuth();

  function onSuccess(e) {
    const table_id = e.data;
    occupiedTable(table_id);
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
