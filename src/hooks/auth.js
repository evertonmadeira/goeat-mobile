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
      const [token, nome, table, register] = await AsyncStorage.multiGet([
        '@GoEats:token',
        '@GoEats:user',
        '@GoEats:table',
        '@GoEats:register',
      ]);

      if ((token[1] && nome[1]) || (table[1] && register[1])) {
        setData({
          token: token[1],
          nome: JSON.parse(nome[1]),
          table: table[1],
          register: JSON.parse(register[1]),
        });
      }

      setLoading(false);
    }

    loadStorageData();
  }, [data]);

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

  const occupiedTable = useCallback(
    async (table_id) => {
      const { nome } = data;
      const response = await api.post(`register/${nome}/${table_id}`);

      console.log(response.data);
      const { occupied_table, _id } = response.data;

      await AsyncStorage.multiSet([
        ['@GoEats:table', occupied_table],
        ['@GoEats:register', JSON.stringify(_id)],
      ]);

      setData((prevData) => {
        return { ...prevData, table: occupied_table, register_id: _id };
      });
    },
    [data],
  );

  const signOut = useCallback(async () => {
    try {
      const { register } = data;

      await api.put(`register/${register}`);

      await AsyncStorage.multiRemove([
        '@GoEats:token',
        '@GoEats:user',
        '@GoEats:table',
        '@GoEats:register',
      ]);

      setData({});
    } catch (error) {
      console.log('Algum problema no logout:' + error);
    }
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        nome: data.nome,
        signIn,
        signOut,
        loading,
        table: data.table,
        occupiedTable,
      }}
    >
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
