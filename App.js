/* eslint-disable react/style-prop-object */
import 'react-native-gesture-handler';//import da aside tem q ser em primeiro 

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
 
}


  

