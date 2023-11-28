import { StyleSheet } from 'react-native';

const constantes = {
  cores: {
    primaryColor: "#3C40BD",
    complementColor: "#3C92BD",
    alternativeColor: "#BD3C5F",
    backgroundScreenColor: "#01050A",
  }
}

const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: constantes.cores.backgroundScreenColor,
    alignItems: "center",
    justifyContent: "auto",
    position: "relative"
  },
  scroolView: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  smallBtnNormal: {
    backgroundColor: constantes.cores.primaryColor,
    padding: 5,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  midBtnNormal: {
    backgroundColor: constantes.cores.primaryColor,
    padding: 10,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  bigBtnNormal: {
    backgroundColor: constantes.cores.primaryColor,
    padding: 15,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  smallTextButton: {
    color: "white",
    fontSize: 20,
  },
  midTextButton: {
    color: "white",
    fontSize: 25,
  },
  bigTextButton: {
    color: "white",
    fontSize: 30,
  },
  bigTextRedButton: {
    color: "red",
    fontSize: 30,
  },
  bigTextBlueButton: {
    color: "#01DDFF",
    fontSize: 30,
  },
  searchInputNormal: {
    backgroundColor: "white",
    borderColor: constantes.cores.primaryColor,
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
  }
})

export { globalStyles, constantes };
