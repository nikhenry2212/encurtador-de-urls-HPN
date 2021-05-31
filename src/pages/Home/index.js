import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';


import StatusBarPage from '../../components/StatusBarPage';
import Menu from './../../components/Menu';

import {Feather} from '@expo/vector-icons';

import {
  ContainerLogo, 
  Logo,
  ContainerContent, 
  Title, 
  SubTitle, 
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText
} from './styles';

export default function Home() {
  return (
    <LinearGradient
      colors={['#2E4F53', '#F681CD']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <StatusBarPage
        barStyle="light-content"
        backgroundColor="#2E4F53"
      />

      <Menu />
      <ContainerLogo>
          <Logo source={require('./../../assets/Logo.png')} resizeMode="contain"/>
      </ContainerLogo>
      <ContainerContent>
        <Title>HPNLinks</Title>
        <SubTitle>Cole seu Link para encurtar</SubTitle>

        <ContainerInput>
            <BoxIcon>
              <Feather name="link" size={22} color="#fff"/>
            </BoxIcon>
            <Input
              placeholder="cole seu Link HPN aqui"
              placeholderTextColor="#fff"/>
          
        </ContainerInput>
        <ButtonLink>
          <ButtonLinkText>
            Gerar Link
          </ButtonLinkText>
        </ButtonLink>
      </ContainerContent>
    </LinearGradient>
  )
}