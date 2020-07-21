/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import {
  Container,
  StatusContent,
  Content,
  ConnectionBar,
  Icons,
  Title,
  Subtitle,
  StatusContainer,
  StatusTitle,
  StatusText,
  TookOrder,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

const Status = () => {
  const [orders, setOrders] = useState([]);
  const [table, setTable] = useState([]);

  const navigation = useNavigation();
  const data = orders.find((order) => order.status);

  async function handleFinishedOrder(id) {
    await api.delete(`order/${table}/${id}`)
      .then(response => { console.log(response.data); })
      .catch(error => console.log('Algo deu errado ao remover o pedido finalizado: ' + error)
      );

    setOrders(orders.filter(element => element._id !== id));

    navigation.navigate('Cart');
  }

  useEffect(() => {
    async function loadTable() {
      try {
        const data = await AsyncStorage.getItem('@GoEats:table');
        setTable(JSON.parse(data));
      } catch (error) {
        console.log(error);
      }
    }
    loadTable();
  }, []);

  useEffect(() => {
    function getStatus() {
      api
        .get(`order/${table}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.log('Algo deu errado ao buscar os pedidos: ' + error);
        });
    }

    setInterval(() => getStatus(), 5000);
  }, [table]);

  return (
    <>
      <Header>Status do Pedido</Header>
      <Container>
        {!data && (
          <>
            <Title>Não há pedidos!</Title>
            <Subtitle>Volte ao menu principal para fazer um pedido.</Subtitle>
            <Content>
              <StatusContent>
                <Icons size={32} name="check-bold" />
              </StatusContent>

              <ConnectionBar />
              <ConnectionBar />

              <StatusContent>
                <Icons size={32} name="chef-hat" />
              </StatusContent>

              <ConnectionBar />
              <ConnectionBar />

              <StatusContent>
                <Icons size={32} name="silverware-fork-knife" />
              </StatusContent>
            </Content>
          </>
        )}

        {data && (
          <>
            <Title>Pedido realizado!</Title>
            <Subtitle>Acompanhe aqui o andamento do seu pedido.</Subtitle>
            <Content>
              {data.status === 'Aberto' && (
                <>
                  <StatusContent isCheck>
                    <Icons isCheck size={32} name="check-bold" />
                  </StatusContent>
                  <ConnectionBar isCheck />
                  <ConnectionBar />
                  <StatusContent >
                    <Icons size={32} name="chef-hat" />
                  </StatusContent>
                  <ConnectionBar />
                  <ConnectionBar />
                  <StatusContent>
                    <Icons size={32} name="silverware-fork-knife" />
                  </StatusContent>
                </>

              )}


              {data.status === 'Em produção' && (
                <>
                  <StatusContent isCheck>
                    <Icons isCheck size={32} name="check-bold" />
                  </StatusContent>
                  <ConnectionBar isCheck />
                  <ConnectionBar isCheck />
                  <StatusContent isCheck>
                    <Icons isCheck size={32} name="chef-hat" />
                  </StatusContent>
                  <ConnectionBar isCheck />
                  <ConnectionBar />
                  <StatusContent>
                    <Icons size={32} name="silverware-fork-knife" />
                  </StatusContent>
                </>
              )}

              {data.status === 'Finalizado' && (
                <>
                  <StatusContent isCheck>
                    <Icons isCheck size={32} name="check-bold" />
                  </StatusContent>
                  <ConnectionBar isCheck />
                  <ConnectionBar isCheck />
                  <StatusContent isCheck>
                    <Icons isCheck size={32} name="chef-hat" />
                  </StatusContent>

                  <ConnectionBar isCheck />
                  <ConnectionBar isCheck />
                  <StatusContent isCheck>
                    <Icons isCheck size={32} name="silverware-fork-knife" />
                  </StatusContent>
                </>
              )}
            </Content>

            <StatusContainer>
              <StatusTitle>Status</StatusTitle>
              {orders.map((order) => {
                if (order.status === 'Aberto') {
                  return (
                    <StatusText key={order._id} isOpened>
                      Aberto
                    </StatusText>
                  );
                } else if (order.status === 'Em produção') {
                  return (
                    <StatusText key={order._id} isMaking>
                      Em produção
                    </StatusText>
                  );
                } else if (order.status === 'Finalizado') {
                  return (
                    <>
                      <StatusText key={order._id} isCheck>
                        Finalizado!
                    </StatusText>

                    </>

                  );
                }
              })}
            </StatusContainer>
            {data.status === 'Finalizado' && (
              <TookOrder key={data._id} onPress={() => handleFinishedOrder(data._id)}>
                <Subtitle>Recebi o pedido</Subtitle>
              </TookOrder>)}
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Status;
