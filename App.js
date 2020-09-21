import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './src/components/Main/Main';
import Cadastro from './src/components/cadastro/Cadastro';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Info" component={Main}/>
        <Tab.Screen name="Cadastro" component={Cadastro}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
