import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Forgot(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logText}>
        Esqueceu a senha? Não tem problema! Digite abaixo seu e-mail para
        recuperá-la.
      </Text>
      <TextInput
        style={styles.form}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <TouchableOpacity
        style={styles.btnSignIn}
        onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.txtSignIn}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  form: {
    width: '100%',
    maxWidth: 250,
    margin: 15,
    height: 50,
    padding: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ff9214',
    borderRadius: 6,
  },
  btnSignIn: {
    width: '100%',
    maxWidth: 250,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ff9214',
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
  },
  txtSignIn: {
    fontSize: 16,
    color: '#FFF',
  },
});
