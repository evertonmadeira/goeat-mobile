import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// import { Container } from './styles';

export default function Login(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.logText}>Login</Text>
      <TextInput
        style={styles.form}
        keyboardType="email-address"
        placeholder="E-mail"
      />
      <TextInput
        style={styles.form}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.btnSignIn}
        onPress={() => props.navigation.navigate('Main')}>
        <Text style={styles.txtSignIn}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSignUp}
        onPress={() => props.navigation.navigate('SignUp')}>
        <Text>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSignUp}
        onPress={() => props.navigation.navigate('Forgot')}>
        <Text>Esqueci a senha!</Text>
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
    margin: 10,
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
  btnSignUp: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
  },
});
