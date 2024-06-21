import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

import Login from './pages/login/index'
import Inicial from './routs'

export default function App() {
  return ( 
    
      <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
          <Stack.Screen name='Inicial' component={Inicial} options={{headerShown: false}}/>
       </Stack.Navigator>
      </NavigationContainer>
    
  );
}
