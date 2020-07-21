import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default (isSigned = false) => {
  function Dash() {
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
          tabBarIcon={({ color }) => (
            <Icon name="event" size={20} color={color} />
          )}
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

  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isSigned ? (
          <Stack.Screen name="Dashboard" component={Dash} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
