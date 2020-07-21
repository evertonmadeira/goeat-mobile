import React, { useCallback, useRef } from 'react';
import {
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import { Container, Title, BackToSignIn, BackToSignInText } from './styles';
import logoImg from '../../assets/GoEat.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

const SignUp: React.FC = () => {
  const formRef = useRef(null);

  const lastInputRef = useRef(null);
  const cpfInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const navigation = useNavigation();

  const handleSignUp = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
          sobrenome: Yup.string().required('Sobrenome obrigatório'),
          cpf: Yup.string().required('CPF obrigatório'),
          email: Yup.string().required('E-mail obrigatório'),
          senha: Yup.string().min(6, 'Senha com no mínimo 6 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log(data);

        await api.post('/user/register', data);

        Alert.alert('Cadastro realizado', 'Você já pode fazer login');

        navigation.goBack();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert('Erro no cadastro', 'Ocorreu um erro ao fazer o cadastro');
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                name="nome"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                autoCapitalize="words"
                onSubmitEditing={() => {
                  lastInputRef.current?.focus();
                }}
              />
              <Input
                ref={lastInputRef}
                name="sobrenome"
                icon="user"
                placeholder="Sobrenome"
                returnKeyType="next"
                autoCapitalize="words"
                onSubmitEditing={() => {
                  cpfInputRef.current?.focus();
                }}
              />
              <Input
                ref={cpfInputRef}
                name="cpf"
                keyboardType="number-pad"
                maxLength={11}
                icon="hash"
                placeholder="CPF"
                returnKeyType="next"
                autoCapitalize="words"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
                ref={emailInputRef}
                name="email"
                keyboardType="email-address"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="senha"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Cadastrar
              </Button>
            </Form>

            <BackToSignIn onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={15} color="#b3ff30" />
              <BackToSignInText>Voltar para login</BackToSignInText>
            </BackToSignIn>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
