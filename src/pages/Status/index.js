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
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';

const Status = () => {
  const [orders, setOrders] = useState([]);
  const data = orders.find((order) => order.status);

  useEffect(() => {
    api
      .get('order')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log('Algo deu errado ao buscar os pedidos: ' + error);
      });
  }, []);

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
              <StatusContent isCheck>
                <Icons isCheck size={32} name="check-bold" />
              </StatusContent>
              <ConnectionBar isCheck />

              {data.status === 'Em produção' ? (
                <>
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
              ) : (
                  <>
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
                    <StatusText key={order._id} isCheck>
                      Finalizado!
                    </StatusText>
                  );
                }
              })}
            </StatusContainer>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Status;
