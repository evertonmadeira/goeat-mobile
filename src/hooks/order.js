import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from '../hooks/auth';

const OrderContext = createContext(null);

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const { table } = useAuth();

  useEffect(() => {
    async function getStatus() {
      try {
        const response = await api.get('order/' + table);

        setOrders(response.data);
      } catch (error) {
        console.log(
          'Algo deu errado ao carregar pedidos no hook order: ' + error,
        );
      }
    }
    // getStatus();
    setInterval(() => getStatus(), 20000);
  }, [table]);

  const value = React.useMemo(() => ({ orders }), [orders]);

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

function useOrder() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder must be used within a OrderProvider');
  }

  return context;
}

export { OrderProvider, useOrder };
