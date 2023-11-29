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

function converterFormatoData(dataString) {
  const data = new Date(dataString);

  const dia = data.getDate();
  const mes = data.getMonth() + 1; 
  const ano = data.getFullYear();

  const diaFormatado = dia.toString().padStart(2, '0');
  const mesFormatado = mes.toString().padStart(2, '0');

  return `${diaFormatado}/${mesFormatado}/${ano}`;
}

const MenorViewPrevisao = (props) => {
  const { cepData, previData, dia } = props;

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
        return <FontAwesome5 name="cloud-rain" size={100} color={constantes.cores.complementColor} />;
        break;
      case 'nublado':
        return <FontAwesome5 name="cloud" size={80} color="#3D45E1" />;
        break;
      case 'pancadas':
        return <FontAwesome5 name="cloud-showers-heavy" size={100} color="#272CE1" />;
        break;
      case 'neve_geada':
        return <FontAwesome5 name="snowflake" size={100} color="#01E1C3" />;
        break;
      case 'sol':
        return <FontAwesome5 name="sun" size={100} color="#DDE019" />;
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
        <FontAwesome name="sun-o" size={60} color="green" />
      )
    } else if (previData?.clima[0]?.indice_uv <= 5) {
      return (
        <FontAwesome name="sun-o" size={60} color="yellow" />
      )
    } else if (previData?.clima[0]?.indice_uv <= 7) {
      return (
        <FontAwesome name="sun-o" size={60} color="orange" />
      )
    } else if (previData?.clima[0]?.indice_uv <= 10) {
      return (
        <FontAwesome name="sun-o" size={60} color="red" />
      )
    } else if (previData?.clima[0]?.indice_uv >= 11) {
      return (
        <FontAwesome name="sun-o" size={60} color="purple" />
      )
    }
  }
  // previData?.clima[+dia]?.condicao
  return (
      <SafeAreaView style={styles.viewPrevisao}>
        <Text style={globalStyles.bigTextButton}>
          {converterFormatoData(previData?.clima[+dia]?.data)}
        </Text>
        <View>
          <View style={styles.infoPrevisao}>
            {renderIconByCondition(previData?.clima[+dia]?.condicao)}
            <View style={styles.infoTemp}>
              <FontAwesome name="thermometer-4" size={60} color="white" />
              <View style={styles.temp}>
                <Text style={globalStyles.smallTextRedButton}>
                  {previData.clima[+dia]?.max}°
                </Text>
                <Text style={globalStyles.smallTextBlueButton}>
                  {previData.clima[+dia]?.min}°
                </Text>
              </View>
            </View>
            {showIconUv()}
            <Text style={globalStyles.smallTextButton}>{previData.clima[0].indice_uv}</Text>
          </View>
        </View>
        <Text style={globalStyles.smallTextButton}>{previData.clima[+dia]?.condicao_desc}</Text>
      </SafeAreaView>
  )
}
export default MenorViewPrevisao;
