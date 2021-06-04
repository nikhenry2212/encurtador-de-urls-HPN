import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar Links salvos
export async function getLinksSave(key){
  const myLinks = await AsyncStorage.getItem(key);
  
  let linkSaves = JSON.parse(myLinks) || [];

  return linkSaves;
}
//salavar um link no storage
export async function saveLink(key, newLink){
  let linksStored = await getLinksSave(key);

  //Se tiver algum link salvo com o msm ID/ ou duplicado preciso ignorar.

  const hasLink = linksStored.some(link => link.id === newLink.id);

  if(hasLink) {
    console.log('Esse link ja existe na lista');
    return;
  }
  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored))
  console.log('Link salvo com sucesso !');

}

//deletar link 
export async function deleteLink(links, id){
  let myLinks = links.filter((item) => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem('hpnlinks', JSON.stringify(myLinks));

  console.log(`LInk deleta do STORAGE com sucesso !`);
  return myLinks;
}