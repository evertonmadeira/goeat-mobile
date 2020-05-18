import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function SignUp(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.logText}>Cadastro</Text>
      <TextInput style={styles.form} placeholder="Nome" />
      <TextInput style={styles.form} placeholder="CPF" />
      <TextInput
        style={styles.form}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.form}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.btnSignIn}
        onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.txtSignIn}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
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
