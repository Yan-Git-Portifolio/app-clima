import React, { useState } from 'react';
import {Text, View, Pressable, TextInput, SafeAreaView, ScrollView} from 'react-native';
import { globalStyles, constantes } from '../../global-style';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'

const CONDITION_GROUPS = {
  chuva: ['c', 'cm', 'cn', 'ct', 'ch', 't'],
  nublado: ['ec', 'ci', 'in', 'np', 'pc', 'pn', 'n', 'nv', 'nd'],
  pancadas: ['pp', 'pt', 'pm', 'pnt', 'psc', 'pcm', 'pct', 'pcn', 'npt', 'npn', 'ncn', 'nct', 'ncm', 'npm', 'npp', 'vn'],
  neve_geada: ['g', 'ne'],
  sol: ['ps', 'e', 'cl'],
};

const ViewPrevisao = (props) => {
  const { cepData, cityData, previData } = props;

  function renderIconByCondition(condition) {
    const group = Object.entries(CONDITION_GROUPS).find(([groupName, conditions]) =>
      conditions.includes(condition)
    );

    if (group) {
      const [groupName] = group;
      return getIconByGroup(groupName);
    }

    return <Text>Condição não mapeada</Text>;
  }

function getIconByGroup(groupName) {
    switch (groupName) {
      case 'chuva':
        return <FontAwesome5 name="cloud-rain" size={190} color={constantes.cores.complementColor} />;
        break;
      case 'nublado':
        return <FontAwesome5 name="cloud" size={190} color="#3D45E1" />;
        break;
      case 'pancadas':
        return <FontAwesome5 name="cloud-showers-heavy" size={190} color={constantes.cores.complementColor} />;
        break;
      case 'neve_geada':
        return <FontAwesome5 name="snowflake" size={190} color="#01E1C3" />;
        break;
      case 'sol':
        return <FontAwesome5 name="sun" size={190} color="#DDE019" />;
        break;
      default:
        return <Text>Condição não mapeada</Text>;
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
        <FontAwesome name="sun-o" size={80} color="green" />
      )
    } else if (previData?.clima[0]?.indice_uv <= 5) {
      return (
        <FontAwesome name="sun-o" size={80} color="yellow" />
      )
    } else if (previData?.clima[0]?.indice_uv <= 7) {
      return (
        <FontAwesome name="sun-o" size={80} color="orange" />
      )
    } else if (previData?.clima[0]?.indice_uv <= 10) {
      return (
        <FontAwesome name="sun-o" size={80} color="red" />
      )
    } else if (previData?.clima[0]?.indice_uv >= 11) {
      return (
        <FontAwesome name="sun-o" size={80} color="purple" />
      )
    }
  }

  return (
      <SafeAreaView style={styles.viewPrevisao}>
        <Text style={globalStyles.bigTextButton}>{cepData.city}</Text>
        {renderIconByCondition(previData?.clima[0]?.condicao)}
        <Text style={globalStyles.bigTextButton}>{previData.clima[0].condicao_desc}</Text>
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
          <Text style={globalStyles.bigTextButton}>{previData.clima[0].indice_uv}</Text>
        </View>
      </SafeAreaView>
  )
}
export default ViewPrevisao;
