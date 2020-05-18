import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

export default function Start(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnScan}
        onPress={() => props.navigation.navigate('QRCodeScreen')}>
        <Text style={styles.txtScan}>Scanear QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  btnScan: {
    alignItems: 'center',
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  txtScan: {
    color: '#fff',
  },
});
