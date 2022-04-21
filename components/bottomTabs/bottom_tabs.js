
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import Home from '../home/home';
import Home1 from '../home1/home1';


export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator screenOptions={{
        tabBarVisible: false,
        tabBarHideOnKeyboard: true,
          headerTitleAlign: 'center',
          headerShown: false,
          animationEnabled: false,
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#f4f4f4',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Home1' component={Home1}/>
        </Tab.Navigator>
  );
};

 const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

