import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from './screens/Home'

const App = () => {

  const[currentScreen, setCurrentScreen] = useState("Home")

  switch (currentScreen) {
    case "Home":
      return <Home />   
      break;
  
    default:
      return <View style={style.erro}><Text>Página não existente</Text></View>
      break;
  }
}

const style = StyleSheet.create({
  telaErro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BA3934",
  }
})

export default App;
