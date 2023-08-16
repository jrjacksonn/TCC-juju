import { useFonts } from "expo-font";
import { View, StyleSheet, Text, Image } from "react-native";
import { ImageBackground } from "react-native"; 
import Splash from "./Splash"

    export default function IntroBV(){

        const wavefundo = require("../assets/images/wave.png");
        const dollflower = require("../assets/images/introbv.png");
        const  [fonstLoaded] = useFonts({
            "Prompt-Medium": require("../assets/fonts/Prompt-Medium.ttf"),
         });

        if(fonstLoaded){         
            return(
                <View style={styles.container}>
                    <ImageBackground source={wavefundo} style={styles.fundo}>
                        <View style={styles.superior}>
                            <Text style={styles.textointro}>Bem vindo ao Inflower,     
                            {'\n'}Sua fonte de conhecimento 
                            {'\n'}das plantas</Text>
                        </View>
                        <View style={styles.inferior}>
                            <Image source={dollflower} style={styles.imagem}/>
                        </View>
                    </ImageBackground>
                </View>
            )
        }else{
            return <Splash/>
        }
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#178f64"
        },

        fundo: {
            flex: 1,
            width: "100%",
            height: "50%",
        },

        superior: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },

        textointro: {
            width: "70%",
            height: 95,
            fontSize: 20,
            fontFamily: "Prompt-Medium",
            color: "#E1FFB9"
        },

        inferior: {
            flex: 1,
        },

        imagem: {
            flex: 1,
            width: "100%",
            height: 390
            
        }

    })