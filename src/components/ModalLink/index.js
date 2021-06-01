import React from 'react';

import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native';

import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl
} from './styles';

import Clipboard from 'expo-clipboard';

import { Feather } from '@expo/vector-icons';

export default function ModalLink({ onClose }) {

   function copyLink() {
    Clipboard.setString('https://bit.ly/hfgdsgdgsh')
    alert('Link copiado com sucesso!')
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: https://bit.ly/hfgdsgdgsh`
      })
      if(result.action === Share.sharedAction){
        if(result.activityType){
          console.log('ActivityType');
        }else{
          //Compartilhou
          console.log('Compartilhado com sucesso!');
        }
      }else if(result.action === Share.dismissedAction){
        console.log('Modal fechado');

      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (

    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather
              name="x"
              color="#212743"
              size={30}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShare}>
            <Feather
              name="share-2"
              color="#212743"
              size={30}
            />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>https://github.com/nikhenry2212</LongUrl>

          <ShortLinkArea
            activeOpacity={1}
            onPress={copyLink}
          >
            <ShortLinkUrl numberOfLines={1}>
              https://bit.ly/hfgdsgdgsh
            </ShortLinkUrl >
            <TouchableOpacity onPress={copyLink}>
              <Feather
                name="copy"
                color="#fff"
                size={25}
              />
            </TouchableOpacity>
          </ShortLinkArea>

        </LinkArea>
      </Container>
    </ModalContainer>

  )
}
