import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

import Questions from './../perguntas/index'
import Theme from './listaPerguntas/Tema'



export default function App(props) {
  return ( 
    
       <Stack.Navigator>
          <Stack.Screen name='Perguntass' component={Questions} options={{headerShown: false}} initialParams={props.route.params}/>
          <Stack.Screen name='Theme' component={Theme} options={{headerShown: false}} />

       </Stack.Navigator>
    
  );
}
