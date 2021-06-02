import React from 'react';
import {View, Text, Alert} from 'react-native';

import {Feather} from '@expo/vector-icons';
import {ContainerButton,Item} from './styles'
export default function ListItem (){
  return(
    <View>
        <ContainerButton activeOpacity={0.5} onPress={() => alert('teste') }>
          <Feather
            name="link"
            color="#fff"
            size={24}
          />
          <Item numberOfLines={1}>
           https://bit.ly/3uJYi8g

          </Item>
        </ContainerButton>
    </View>
  )
}