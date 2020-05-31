import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PreScan from '../pages/PreScan';
import Scan from '../pages/Scan';
import Main from '../pages/Main';
import Cart from '../pages/Cart';
import Dishes from '../pages/Dishes';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator screenOptions={{ headerShown: false, cardStyle: '#64002a' }}>
    <App.Screen name="Main" component={Main} />
    <App.Screen name="Cart" component={Cart} />
    <App.Screen name="Dishes" component={Dishes} />
    {/* <App.Screen name="PreScan" component={PreScan} />
    <App.Screen name="Scan" component={Scan} /> */}
  </App.Navigator>
);

export default AppRoutes;
