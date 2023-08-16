import {
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity, 
    Text,
    KeyboardAvoidingView, 
    Platform, 
    ScrollView } from "react-native";
import React, { useState } from "react";
import Caixatext from "../components/Caixatext";
import Caixatextc from "../components/Caixatextc";
import Bretorno from "../components/Bretorno";
import Checkbox from "expo-checkbox";
import { SelectList } from "react-native-dropdown-select-list";
import { useFonts } from "expo-font";
import Splash from "./Splash";
import Login from "./Login";

    export default function Cadastro(props){
        
        const wavefundo = require("../assets/images/wave.png");   

        const [selected, setSelected] = React.useState("");
        
        const data = [
            {key:'1', value:'Acre (AC)'},
            {key:'2', value:'Alagoas (AL)'},
            {key:'3', value:'Amapá (AP)'},
            {key:'4', value:'Amazonas (AM)'},
            {key:'5', value:'Bahia (BA)'},
            {key:'6', value:'Ceará (CE)'},
            {key:'7', value:'Espírito Santo (ES)'},
            {key:'8', value:'Goiás (GO)'},
            {key:'9', value:'Maranhão (MA)'},
            {key:'10', value:'Mato Grosso (MT)'},
            {key:'11', value:'Mato Grosso do Sul (MS)'},
            {key:'12', value:'Minas Gerais (MG)'},
            {key:'13', value:'Pará (PA)'},
            {key:'14', value:'Paraíba (PB)'},
            {key:'15', value:'Paraná (PR)'},
            {key:'16', value:'Pernambuco (PE)'},
            {key:'17', value:'Piauí (PI)'},
            {key:'18', value:'Rio de Janeiro (RJ)'},
            {key:'19', value:'Rio Grande do Norte (RN)'},
            {key:'20', value:'Rio Grande do Sul (RS)'},
            {key:'21', value:'Rondônia (RO)'},
            {key:'22', value:'Roraima (RR)'},
            {key:'23', value:'Santa Catarina (SC)'},
            {key:'24', value:'São Paulo (SP)'},
            {key:'25', value:'Sergipe (SE)'},
            {key:'26', value:'Tocantins (TO)'},
            {key:'27', value:'Distrito Federal (DF)'},
        ]

        const [isSelected, setSelection] = useState(false);
        const retorno = () => {
            props.navigation.navigate("Login")
        }
        const  [fonstLoaded] = useFonts({
            "Prompt-Medium": require("../assets/fonts/Prompt-Medium.ttf"),
         });

        if(fonstLoaded){  
            return (
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyb}>
                    <ScrollView style={styles.container}>
                        <ImageBackground source={wavefundo} style={styles.fundo}>
                            <View style={styles.box}>
                                <View style={styles.superior}>
                                    <Bretorno iconame2 = "ios-chevron-back" onPress={retorno}/>
                                    <Text style={styles.texto}>Cadastro</Text>
                                </View>
                                <View style={styles.inferior}>
                                    <Caixatextc labeltext="Nome de usuário" boxtextc/>
                                    <View style={styles.listaest}>
                                        <Text style={styles.textolist}>Estado</Text>
                                        <SelectList setSelected={(val) => setSelected(val)} 
                                        dropdownStyles={{
                                            backgroundColor: "#E1FFB9",
                                            borderRadius: 18
                                        }}
                                        data={data} save="value" 
                                        placeholder="Selecione uma opção" maxHeight={110}/>
                                    </View>
                                    <Caixatextc labeltext="Email" boxtextc/>
                                    <Caixatext labeltext="Senha" iconame/>
                                    <Caixatext labeltext="Confirmar senha" iconame/>   
                                    <View style={styles.cadastrocomp}>
                                        <Checkbox value={isSelected} onValueChange={setSelection} style={styles.checkbox}/>
                                        <Text style={styles.textoterm}>Li e aceito os termos de uso e condições</Text>
                                    </View>   
                                    <TouchableOpacity style={styles.cadastro} onPress={() => props.navigation.navigate("IntroBV")}>                            
                                        <Text style={styles.textoc}>Cadastrar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                </KeyboardAvoidingView>
            )
        }else{
            return <Splash/>
        }
    }

    const styles = StyleSheet.create({
        keyb: {
            flex: 1,
        },

        container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#178f64"
        },

        fundo: {
            flex: 1,
            width: "100%",
            height: "50%"
        },

        box: {
            flex: 1,
            backgroundColor: "#ffffff15",
            alignItems: "center",
            marginBottom: 70,
            marginTop: 80,
            marginHorizontal: 20,
            borderRadius: 20
        },

        superior: {
            flex: 1,
            flexDirection: "row",
            width: "98%",
            height: 150,
            justifyContent: "space-between",
            alignItems: "center"
        },

        inferior: {
            flex: 4,
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        },

        textolist: {
            fontSize: 20,
            fontFamily: "Prompt-Medium",
            borderBottomWidth: 30,
            height: 25,
            color: "#E1FFB9",
        },

        listaest: {
            width: "85%",
            marginBottom: 25,
        },

        cadastrocomp: {
            width: "86%",
            height: 90,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        
        checkbox: {
            borderColor: "#E1FFB9",
            width: 18,
            height: 18
        },

        cadastro: {
            width: "85%",
            height: 30,
            backgroundColor: "#175F5F",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center"
        },

        texto: {
            fontSize: 40,
            fontWeight: "bold",
            fontFamily: "Prompt-Medium",
            color: "#E1FFB9",
            borderRightWidth: 95,
        },

        textoc: {
            fontSize: 20,
            fontFamily: "Prompt-Medium",
            color: "#E1FFB9",
        },

        textoterm: {
            width: "98%",
            height: 20,
            fontSize: 15,
            marginLeft: 5,
            fontFamily: "Prompt-Medium",
            color: "#E1FFB9",
        }
    })
