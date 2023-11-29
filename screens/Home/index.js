import React, { useState } from 'react';
import {Text, View, Pressable, TextInput, ScrollView} from 'react-native';
import { globalStyles, constantes } from '../../global-style';
import SearchBar from '../../components/SearchBar';
import ViewPrevisao from '../../components/ViewPrevisao';
import { FontAwesome5 } from '@expo/vector-icons';
import MenorViewPrevisao from '../../components/MenorViewPrevisao';

const Home = () => {

  const [cepData, setCepData] = useState(undefined)
  const [cityData, setCityData] = useState({})
  const [previData, setPreviData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  function verificaLoading() {
    if (cepData == undefined) {
      return null
    } else if (isLoading) {
      return <FontAwesome5 name="search" size={250} color="white"/>
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
export default Home;
