import React, { useState } from 'react';
import {Text, View, Pressable, TextInput, ScrollView} from 'react-native';
import { globalStyles, constantes } from '../../global-style';
import SearchBar from '../../components/SearchBar';
import ViewPrevisao from '../../components/ViewPrevisao';
import { FontAwesome5 } from '@expo/vector-icons';

const Home = () => {

  const [cepData, setCepData] = useState(undefined)
  const [cityData, setCityData] = useState({})
  const [previData, setPreviData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  function verificaLoading() {
    if (cepData == undefined) {
      return null
    }
    if (isLoading) {
      return <FontAwesome5 name="search" size={250} color="white" />
    } else {
      return <ViewPrevisao cepData={cepData} cityData={cityData} previData={previData}/>
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
      <ScrollView style={globalStyles.scroolView}>
      {verificaLoading()}
      </ScrollView>
    </View>
  )
}
export default Home;
