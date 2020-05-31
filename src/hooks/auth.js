import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  /* ESSA LÓGICA SÓ É EXECUTADA QUANDO A PÁGINA É RECARREGADA */
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const [token, nome] = await AsyncStorage.multiGet([
        '@GoEats:token',
        '@GoEats:user',
      ]);

      if (token[1] && nome[1]) {
        setData({ token: token[1], nome: JSON.parse(nome[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, senha }) => {
    const response = await api.post('user/authenticate', {
      email,
      senha,
    });

    const { token } = response.data;
    const { nome } = response.data.user;

    await AsyncStorage.multiSet([
      ['@GoEats:token', token],
      ['@GoEats:user', JSON.stringify(nome)],
    ]);

    setData({ token, nome });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoEats:token', '@GoEats:user']);

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ nome: data.nome, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
