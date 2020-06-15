import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

const Routes = () => {
  const routesOptions = {
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: '#517CAF',
    },
    headerTintColor: '#fff',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Usuários"
          component={Main}
          options={routesOptions}
        />
        <Stack.Screen name="Perfil" component={User} options={routesOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
