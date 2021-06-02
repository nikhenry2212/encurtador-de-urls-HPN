import React, { useState } from 'react';

import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal, ActivityIndicator } from 'react-native';

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

import api from '../../services/api';

export default function Home() {

  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [data, setData] = useState({});

  async function handleShortLink() {
    setLoading(true);

    try {
      const response = await api.post('/shorten',
        {
          long_url: input
        })
      console.log(response.data);
      setData(response.data);
      setModalVisible(true);

      Keyboard.dismiss();//fechar teclado
      setLoading(false);
      setInput('')//deixei o valor do input vazio novamente, se estiver dando algum erro


    } catch (erro) {
      alert('Ops algo deu errado !');
      Keyboard.dismiss();//fechar teclado
      setInput('')//deixei o valor do input vazio novamente, se estiver dando algum erro
      setLoading(false);


    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={['#70cbe1', '#F681CD']}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <StatusBarPage
          barStyle="light-content"
          backgroundColor="#70cbe1"
        />

        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled={true}
        >

          <ContainerLogo>
            <Logo source={require('./../../assets/Logo.png')} resizeMode="contain" />
          </ContainerLogo>
          <ContainerContent>
            <Title>HPNLINKS</Title>
           
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
                onChangeText={(texto) => setInput(texto)}
              />

            </ContainerInput>
            <ButtonLink onPress={handleShortLink}>
              {
                loading ? (
                  <ActivityIndicator color="#121212" size={24} />
                ) : (
                  <ButtonLinkText>
                    Gerar Link
                  </ButtonLinkText>
                )
              }

            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} data={data}/>
        </Modal>

      </LinearGradient>
    </TouchableWithoutFeedback>

  )
}