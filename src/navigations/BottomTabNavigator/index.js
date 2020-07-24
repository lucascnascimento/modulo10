/* eslint-disable react/prop-types */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Schedule from './scheduleNavigator';

const BottomTab = createBottomTabNavigator();

export default function bottomTabNavigator() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: '#8d41a8',
          borderTopColor: 'transparent',
        },
      }}
    >
      <BottomTab.Screen
        name="Agendamento"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="event" size={20} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Agendar"
        component={Schedule}
        options={{
          tabBarVisible: false,
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" size={20} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Meu Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={20} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
