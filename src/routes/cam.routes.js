import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PreScan from '../pages/PreScan';
import Scan from '../pages/Scan';

const Cam = createStackNavigator();

const CamRoutes = () => (
  <Cam.Navigator screenOptions={{ headerShown: false, cardStyle: '#64002a' }}>
    <Cam.Screen name="PreScan" component={PreScan} />
    <Cam.Screen name="Scan" component={Scan} />
  </Cam.Navigator>
);

export default CamRoutes;
