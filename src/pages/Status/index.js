/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';

import {
  Container,
  StatusContent,
  OrderContainer,
  OrderDetail,
  TextDetail,
  TextContainer,
  NameStatusOrderContainer,
  NumberOrderText,
  Content,
  ConnectionBar,
  Icons,
  Title,
  Subtitle,
  StatusText,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useOrder } from '../../hooks/order';

const Status = () => {
  // const [orders, setOrders] = useState([]);
  const [table, setTable] = useState([]);
  const { orders } = useOrder();

  const navigation = useNavigation();
  const data = orders.find((order) => order.status);

  // const handleFinishedOrder = async (id) => {
  //   await api.delete(`order/${table}/${id}`)
  //     .then(response => { console.log(response.data); })
  //     .catch(error => console.log('Algo deu errado ao remover o pedido finalizado: ' + error)
  //     );

  //   setOrders(orders.filter(element => element._id !== id));

  //   navigation.navigate('Cart');
  // };

  // useEffect(() => {
  //   async function loadTable() {
  //     try {
  //       const getTable = await AsyncStorage.getItem('@GoEats:table');
  //       setTable(JSON.parse(getTable));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   loadTable();
  // }, []);

  // useEffect(() => {
  //   function getStatus() {
  //     api
  //       .get(`order/${table}`)
  //       .then((response) => {
  //         setOrders(response.data);
  //       })
  //       .catch((error) => {
  //         console.log('Algo deu errado ao buscar os pedidos: ' + error);
  //       });
  //   }

  //   setInterval(() => getStatus(), 10000);
  // }, [table]);

  return (
    <>
      <Header>Status do Pedido</Header>
      <Container>
        {!data && (
          <>
            <Title>Não há pedidos!</Title>
            <Subtitle>Volte ao menu principal para fazer um pedido.</Subtitle>
          </>
        )}

        {data && (
          <>
            <Title>Pronto!</Title>
            <Subtitle>Acompanhe aqui o andamento de cada pedido.</Subtitle>
            <FlatList
              data={orders}
              keyExtractor={(item) => String(item._id)}
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{ height: 20 }}
              renderItem={({ item }) => (
                <>
                  <OrderContainer>
                    <NumberOrderText>
                      Pedido {item.order_number}
                    </NumberOrderText>
                    <OrderDetail>

                      {item.pedidos.map(order => {
                        return (

                          <>
                            <TextContainer key={order._id}>
                              <TextDetail>- {order.quantity}x</TextDetail>
                              <TextDetail>{order.nome}</TextDetail>
                            </TextContainer>

                          </>
                        );
                      })}

                    </OrderDetail>
                    <Content>
                      {item.status === 'Aberto' && (
                        <>
                          <StatusContent isCheck>
                            <Icons isCheck size={16} name="check-bold" />
                          </StatusContent>
                          <ConnectionBar isCheck />
                          <ConnectionBar />
                          <StatusContent />
                          <ConnectionBar />
                          <ConnectionBar />
                          <StatusContent />
                        </>

                      )}

                      {item.status === 'Em produção' && (
                        <>
                          <StatusContent isCheck>
                            <Icons isCheck size={16} name="check-bold" />
                          </StatusContent>
                          <ConnectionBar isCheck />
                          <ConnectionBar isCheck />
                          <StatusContent isCheck>
                            <Icons isCheck size={16} name="check-bold" />
                          </StatusContent>
                          <ConnectionBar isCheck />
                          <ConnectionBar />
                          <StatusContent />
                        </>
                      )}

                      {item.status === 'Finalizado' && (
                        <>
                          <StatusContent isCheck>
                            <Icons isCheck size={16} name="check-bold" />
                          </StatusContent>
                          <ConnectionBar isCheck />
                          <ConnectionBar isCheck />
                          <StatusContent isCheck>
                            <Icons isCheck size={16} name="check-bold" />
                          </StatusContent>

                          <ConnectionBar isCheck />
                          <ConnectionBar isCheck />
                          <StatusContent isCheck>
                            <Icons isCheck size={16} name="check-bold" />
                          </StatusContent>
                        </>
                      )}
                    </Content>
                    <NameStatusOrderContainer>
                      <StatusText>Aberto</StatusText>
                      <StatusText>Produção</StatusText>
                      <StatusText>Concluído</StatusText>
                    </NameStatusOrderContainer>
                  </OrderContainer>


                  {/* <StatusContainer>
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
              </StatusContainer> */}
                  {/* {item.status === 'Finalizado' && (
                    <TookOrder key={item._id} onPress={() => handleFinishedOrder(item._id)}>
                      <Subtitle>Recebi o pedido</Subtitle>
                    </TookOrder>)} */}
                </>
              )}
            />

          </>
        )
        }
      </Container>
      <Footer />
    </>
  );
};

export default Status;
