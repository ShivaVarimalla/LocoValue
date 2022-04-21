
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  StyleSheet,
} from 'react-native';
import BottomTabs from './components/bottomTabs/bottom_tabs';

import Login from './components/login/login';


export default function App() {
  const Tab = createStackNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
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
        <Tab.Screen name='Login' component={Login} options={{
          tabBarIcon: ({ size, color }) => (<Icon name='home' color={color} size={size} />)
        }} />
        <Tab.Screen name='Tabs' component={BottomTabs} />
      </Tab.Navigator>
    </NavigationContainer>
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

