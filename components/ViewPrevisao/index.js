import React, { useState } from 'react';
import {Text, View, Pressable, TextInput, SafeAreaView, ScrollView} from 'react-native';
import { globalStyles, constantes } from '../../global-style';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'


const ViewPrevisao = (props) => {

  const { cepData, cityData, previData } = props;

  function showIconCondicao() {
    console.log(previData)
    if (previData == undefined) {
      return (
        <Text>Erro</Text>
      )
    }
    if (previData?.clima[0]?.condicao == "c") {
      return (
        <FontAwesome5 name="cloud-rain" size={190} color={constantes.cores.complementColor} />
      )
    }
  }

  function showIconUv() {
    if (previData == undefined) {
      return (
        <Text>Erro</Text>
      )
    }
    if (previData?.clima[0]?.indice_uv <= 2) {
      return (
        <FontAwesome name="sun-o" size={75} color="green" />
      )
    } else if (previData?.clima[0]?.indice_uv <= 5) {
      return (
        <FontAwesome name="sun-o" size={100} color="yellow" />
      )
    } else if (previData?.clima[0]?.indice_uv <= 7) {
      return (
        <FontAwesome name="sun-o" size={100} color="orange" />
      )
    } else if (previData?.clima[0]?.indice_uv <= 10) {
      return (
        <FontAwesome name="sun-o" size={100} color="red" />
      )
    } else if (previData?.clima[0]?.indice_uv >= 11) {
      return (
        <FontAwesome name="sun-o" size={100} color="purple" />
      )
    }
  }

  return (
      <SafeAreaView style={styles.viewPrevisao}>
        <Text style={globalStyles.bigTextButton}>{cepData.city}</Text>
        {showIconCondicao()}
        <Text style={globalStyles.midTextButton}>{previData.clima[0].condicao_desc}</Text>
        <View style={styles.infoPrevisao}>
          <View style={styles.infoTemp}>
            <FontAwesome name="thermometer-4" size={100} color="white" />
            <View style={styles.temp}>
              <Text style={globalStyles.bigTextRedButton}>
                {previData.clima[0].max}°
              </Text>
              <Text style={globalStyles.bigTextBlueButton}>
                {previData.clima[0].min}°
              </Text>
            </View>
          </View>
          {showIconUv()}
        </View>
      </SafeAreaView>
  )
}
export default ViewPrevisao;
