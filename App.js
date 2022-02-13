
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/navigation/HomeScreen';
import TestsScreen from './src/navigation/Tests';
import TipsScreen from './src/navigation/Tips';
import MainContainer from './src/navigation/MainContainer';
const Tab = createBottomTabNavigator();


export default function App (){
 

  return (
    <MainContainer/>
  );
};




