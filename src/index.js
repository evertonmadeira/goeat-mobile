import React from 'react';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AppProvider from './hooks';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#64002a" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
