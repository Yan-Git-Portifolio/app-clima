import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';
import { globalStyles, constantes } from '../../global-style';
import SearchBar from '../../components/SearchBar';
import ViewPrevisao from '../../components/ViewPrevisao';
import { FontAwesome5 } from '@expo/vector-icons';
import MenorViewPrevisao from '../../components/MenorViewPrevisao';
import gifCarregamento from '../../assets/loading.gif'

const Home = () => {

  const [cepData, setCepData] = useState(undefined)
  const [cityData, setCityData] = useState({})
  const [previData, setPreviData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  function verificaLoading() {
    if (cepData == undefined) {
      return null
    } else if (isLoading == 3) {
      return (
        <View style={styles.container}>
          <Text style={globalStyles.bigTextRedButton}>Cep Não encontrado</Text>
        </View>
      )
    } else if (isLoading) {
      return (
        <View style={styles.container}>
          <Image source={gifCarregamento} style={styles.gif} />
        </View>
      )
    } else {
      return (
        <ScrollView style={globalStyles.scroolView}>
          <ViewPrevisao cepData={cepData} cityData={cityData} previData={previData}/>
          <MenorViewPrevisao cepData={cepData} previData={previData} dia='2'/>
          <MenorViewPrevisao cepData={cepData} previData={previData} dia='3'/>
          <MenorViewPrevisao cepData={cepData} previData={previData} dia='4'/>
          <MenorViewPrevisao cepData={cepData} previData={previData} dia='5'/>
        </ScrollView>
      )
    }
  }

  return (
    <View style={globalStyles.screen}>
      <SearchBar 
        setCepData={setCepData} 
        setCityData={setCityData} 
        setPreviData={setPreviData}
        setIsLoading={setIsLoading}
      />
      {verificaLoading()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: 200, 
    height: 200, 
  },
});

export default Home;
