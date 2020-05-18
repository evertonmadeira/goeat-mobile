import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Start from './pages/Start';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Forgot from './pages/Forgot';
import Main from './pages/Main';
// import QRCodeScreen from './pages/QRCodeScreen';
// import Order from './pages/Order';
// import Profile from './pages/Profile';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="none"
        screenOptions={{headerTitle: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        {/* <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} /> */}
        {/* <Stack.Screen name="Order" component={Order} /> */}
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
