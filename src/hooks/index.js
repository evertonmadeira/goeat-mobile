import React from 'react';

import { AuthProvider } from './auth';
import { CartProvider } from './cart';
import { OrderProvider } from './order';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <CartProvider>
      <OrderProvider>{children}</OrderProvider>
    </CartProvider>
  </AuthProvider>
);

export default AppProvider;
