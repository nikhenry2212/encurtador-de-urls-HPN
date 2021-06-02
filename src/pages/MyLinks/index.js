import React from 'react';

import { Container, Title, ListLinks } from './styles';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import { LinearGradient } from 'expo-linear-gradient';

export default function MyLinks() {
  return (
    <Container>
      <LinearGradient
         colors={['#70cbe1', '#F681CD']}
         style={{ flex: 1, justifyContent: 'center' }}
      >
      <StatusBarPage
        barStyle="light-content"
        backgroundColor="#70cbe1"
      />

      <Menu />

      <Title>
        Meus Links
      </Title>

      <ListLinks
        data={[{ id: 1, link: 'test.com' },{ id: 2, link: 'test2.com' }]}
        keyExtractor={(item ) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item}/>}
        contentContainerStyle={{paddingBottom: 20}}
        showVerticalScrollIndicator={false}
      />
      </LinearGradient>
    </Container>
  )
}