import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import {Ecabezado}   from './componentes/Encabezado';
import {Piepagina} from './componentes/Piedepagina';
import { useState } from 'react';
import { Logo } from './componentes/logo';
import { ElementoFlatList } from './componentes/ElementoFlatList';
import { Ubicaciones } from './componentes/Pantallas/Ubicaciones';
import { NavigationContainer } from '@react-navigation/native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    marginTop: 100,
    marginLeft: 12,
    marginRight: 12
  }
})





export default function App() {
  return  <NavigationContainer styles={styles.container}>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Ubicaciones} />
      <Tab.Screen name="Paisajes" component={Ubicaciones} />
    </Tab.Navigator>
    </NavigationContainer>
    
  
}


//solo logre aplicar un metodo de navegacion ing me salian muchos errores 



