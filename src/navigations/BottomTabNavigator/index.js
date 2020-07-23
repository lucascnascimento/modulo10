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
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Agendamento') {
            iconName = 'event';
          } else if (route.name === 'Meu Perfil') {
            iconName = 'person';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}
    >
      <BottomTab.Screen
        name="Agendamento"
        component={Dashboard}
        tabBarIcon={({ color }) => (
          <Icon name="event" size={20} color={color} />
        )}
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
        tabBarIcon={({ color }) => (
          <Icon name="person" size={20} color={color} />
        )}
      />
    </BottomTab.Navigator>
  );
}
