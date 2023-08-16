import { View, Image, StyleSheet, TouchableOpacity, Text} from "react-native";
import Caixatext from "../components/Caixatext";
import Caixatextc from "../components/Caixatextc";
import { ImageBackground } from "react-native";
import Splash from "./Splash";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { emailLogin } from "../auth/emailAuth";

    export default function Login(props) {

        const imagem = require("../assets/images/iconlogo.png")
        const wavefundo = require("../assets/images/wave.png")

        const [email, setEmail] = React.useState("")
        const [pass, setPass] = React.useState("")

        const [isSelected, setSelection] = useState(false);

        const  [fonstLoaded] = useFonts({
            "Prompt-Medium": require("../assets/fonts/Prompt-Medium.ttf"),
         });
         
        if(fonstLoaded){  
            return (
                <View style={styles.container}>
                    <ImageBackground source={wavefundo} style={styles.fundo}>
                        <View style={styles.box}>
                            <View style={styles.superior}>
                                <Image source={imagem} style={styles.imagem}/>  
                            </View>
                            <View style={styles.inferior}>
                                <Caixatextc labeltext="Email/Usuário" boxtextc value={email} setValue={setEmail}/>
                                <View style={styles.gap}></View>
                                <Caixatext labeltext="Senha" iconame value={pass} setValue={setPass}/>
                                <View style={styles.checkB}>
                                    <Checkbox value={isSelected} onValueChange={setSelection} style={styles.checkbox2}/>
                                    <Text style={styles.textoe}>Mantenha-me conectado!</Text>
                                </View>
                                <TouchableOpacity style={styles.login} onPress={ () => {
                                    emailLogin(email, pass)
                                    console.log(email, pass)
                                }}>
                                    <Text style={styles.textol}>Entrar</Text>
                                </TouchableOpacity>
                                <Text style={styles.textocad}>Não possui registro? Cadastre-se</Text>
                                <TouchableOpacity style={styles.cadastro} onPress={() => props.navigation.navigate("Cadastro")}>
                                    <Text style={styles.textoc}>Cadastrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            )
        }else{
            return<Splash/>
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            height: "100%",
            flexDirection: "column",
            backgroundColor: "#178f64",
        },

        fundo: {
           flex: 1,
            width: "100%",
            height: "50%"
        },

        box: {
            flex: 1,
            backgroundColor: "#ffffff15",
            marginBottom: 70,
            marginTop: 80,
            marginHorizontal: 20,
            borderRadius: 20,
        },

        imagem: {
            width: 340,
            height: 180,
        },
    
        superior: {
            flex: 1,
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
        },

        inferior: {
           flex: 2,
           width: "100%",
           justifyContent: "center",
           alignItems: "center"
        },

        gap: {
            height: 20,
        },

        checkB: {
            width: "58%",
            height: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
         textoe: {
            fontFamily: "Prompt-Medium",
            fontSize: 15,
            color: "#E1FFB9"
         },

        checkbox2: {
            borderColor: "#E1FFB9",
            width: 18,
            height: 18
        },
    
        login: {
            width: "85%",
            height: 30,
            backgroundColor: "#175F5F",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center", 
            marginBottom: 26,
            marginTop: 20
        },
        
        textocad: {
            width: "62%",
            height: 20,
            marginTop: 70,
            marginBottom: 10,
            fontFamily: "Prompt-Medium",
            color: "#E1FFB9",
        },

        cadastro: {
            width: "85%",
            height: 30,
            backgroundColor: "#175F5F",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10 
        },

        textol: {
            fontSize: 20,
            fontFamily: "Prompt-Medium",
            color: "#E1FFB9"
        },

        textoc: {
            fontSize: 20,
            fontFamily: "Prompt-Medium",
            color: "#E1FFB9"
        }
    })