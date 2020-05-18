import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sideBar}>
        <Text>Ei</Text>
        <Text>Ei</Text>
        <Text>Ei</Text>
        <Text>Ei</Text>
        <Text>Ei</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
  },
  sideBar: {
    width: '100%',
    maxWidth: 100,
    height: '100%',
    maxHeight: 700,
    flexDirection: 'column',
    backgroundColor: '#ff9214',
  },
});
