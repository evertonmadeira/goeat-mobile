import React, { useState } from 'react';
import {
  View,
  Text,
  Linking,
  Dimensions,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Container } from './styles';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import ModalWebView from '../../components/ModalWebView';

const Scan = () => {
  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      Alert.alert('Ocorreu um erro', 'Tente novemente', err),
    );
  };

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
