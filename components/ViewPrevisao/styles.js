import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    viewPrevisao: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 5,
        borderColor: "gray",
        borderWidth: 5,
        padding: 20,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderRadius: 20
    }, 
    infoPrevisao: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    }, 
    infoTemp: {
        gap: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }, 
    temp: {
        width: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
})

export { styles };
