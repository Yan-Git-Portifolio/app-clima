import { StyleSheet } from "react-native";
import { constantes } from "../../global-style";

const styles = StyleSheet.create({
    viewSearchBar: {
        backgroundColor: constantes.cores.primaryColor,
        width: "100%",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
})

export { styles };