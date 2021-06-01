import React, { useState } from 'react';

import { TouchableWithoutFeedback, Keyboard,  KeyboardAvoidingView,Platform, Modal } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';


import StatusBarPage from '../../components/StatusBarPage';
import Menu from './../../components/Menu';


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
  ButtonLinkText, 
 
} from './styles';
import ModalLink from '../../components/ModalLink';
import { set } from 'react-native-reanimated';

export default function Home() {

  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function handleShortLink(){
    //alert(`url digitada: ${input}`);
   setModalVisible(true)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={['#2E4F53', '#F681CD']}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <StatusBarPage
          barStyle="light-content"
          backgroundColor="#2E4F53"
        />

        <Menu />
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'android' ? 'padding' : 'position' }
          enabled={true}
        >

        <ContainerLogo>
          <Logo source={require('./../../assets/Logo.png')} resizeMode="contain" />
        </ContainerLogo>
        <ContainerContent>
          <Title>HPNLinks</Title>
          <SubTitle>Cole seu Link para encurtar</SubTitle>

          <ContainerInput>
            <BoxIcon>
              <Feather name="link" size={22} color="#fff" />
            </BoxIcon>
            <Input

              placeholder="cole seu Link HPN aqui"
              placeholderTextColor="#fff"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="url"
              value={input}
              onChangeText={(texto)=> setInput(texto)}
              />

          </ContainerInput>
          <ButtonLink onPress={handleShortLink}>
            <ButtonLinkText>
              Gerar Link
          </ButtonLinkText>
          </ButtonLink>
        </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)}/>
        </Modal>

      </LinearGradient>
    </TouchableWithoutFeedback>

  )
}