import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const BottomTab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="SignIn" component={SignIn} />
        <BottomTab.Screen name="SignUp" component={SignUp} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
