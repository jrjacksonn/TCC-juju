import {  View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ccomando from "../components/Ccomando";

export default function Home(){

    const imagem = require("../assets/images/flores.png")

    return(
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={imagem} style={styles.flores}/>
            </View>
                
                
            <View style={styles.corpo}>

            </View>
            <View style={styles.tabBar}>
                <Ccomando icone="home"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#E7ABE7",
    },

    cabecalho: {
        flex: 2,
        backgroundColor: "#E7ABE7",
        alignItems: "center",
        justifyContent: "center",
    },

    gradiente: {
        width: "100%",
        height: 100,
    },

    flores: {
        marginTop: 30,
        width: "80%",
        height: "50%"
    },

    corpo: {
        flex: 9,
        flexDirection: "row",
        backgroundColor: "white",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },

    tabBar: {
        flex: 1,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
})
