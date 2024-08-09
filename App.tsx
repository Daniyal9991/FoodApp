import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/Screens/Login'
import Home from  './src/Screens/Home'
import Signup from  './src/Screens/Signup'
import Login12 from './src/Screens/Login12'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginNav from  './src/Screens/LoginNav'
import SignupNav from  './src/Screens/SignupNav'
import Home1 from './src/Screens/Home1'
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login12' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login12' component={Login12}/>
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Home1' component={Home1}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
};

export default App

const styles = StyleSheet.create({})