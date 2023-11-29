import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../global-style';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { pegaDadosCepV2, pegaDadosCidade, pegaDadosPrevisao } from '../../utils/api';

const SearchBar = (props) => {
  const { setCepData, setCityData, setPreviData, setIsLoading } = props;
  const [cep, setCep] = useState("");
  const [searchDisable, setSearchDisable] = useState(false)

  const handleSearch = async () => {
    setIsLoading(true)
    setSearchDisable(true)
    let cepData = await pegaDadosCepV2(cep)
    if (cepData.erro == false) {
      setIsLoading(3)
      setSearchDisable(false)
      return;
    }
    let cityData = await pegaDadosCidade(cepData.city)
    let previData = await pegaDadosPrevisao(cityData[0].id, 6)
    setInfos(cepData, cityData, previData)
  };

  const setInfos = async (cepData, cityData, previData) => {
    setCepData(await cepData);
    setCityData(await cityData);
    setPreviData(await previData);
    setIsLoading(false)
    setSearchDisable(false)
  } 

  return (
    <View style={styles.viewSearchBar}>
      <TextInput
        style={globalStyles.searchInputNormal}
        placeholder="Digite o CEP..."
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />
      <TouchableOpacity
        style={globalStyles.smallBtnNormal}
        onPress={handleSearch}
        disabled={searchDisable}
      >
        <FontAwesome name="search" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
