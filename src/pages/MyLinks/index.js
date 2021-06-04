import React, { useEffect } from 'react';
import { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { useIsFocused } from '@react-navigation/core';
import { ActivityIndicator, Modal } from 'react-native';


import { getLinksSave, deleteLink } from './../../utils/storeLinks';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import ModalLink from '../../components/ModalLink';


import { Container, Title, ListLinks, ContainerEmpty, WarningText } from './styles';

export default function MyLinks() {

  const isFocused = useIsFocused();

  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('hpnlinks');
      setLinks(result);
      setLoading(false)

    }

    getLinks()
  }, [isFocused])

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(links, id)
    setLinks(result);
  }

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
        {
          loading && (
            <ContainerEmpty>
              <ActivityIndicator color="#ccc" size={25}/>
            </ContainerEmpty>
          )
        }

        {!loading && links.length === 0 && (
          <ContainerEmpty>
            <WarningText>Você ainda não possui nenhum link 👻</WarningText>
          </ContainerEmpty>
        )}

        <ListLinks
          data={links}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} />}
          contentContainerStyle={{ paddingBottom: 20 }}
          showVerticalScrollIndicator={false}
        />
        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} data={data} />
        </Modal>
      </LinearGradient>
    </Container>
  )
}
