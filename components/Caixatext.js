import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Splash from "../screens/Splash";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function Caixatext (props){
    
    const Caixatext = props.labeltext
    const icon1 = props.iconame
    const boxc = props.boxtextc
    //const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const  [fonstLoaded] = useFonts({
        "Prompt-Medium": require("../assets/fonts/Prompt-Medium.ttf"),
     });

    if(fonstLoaded){  
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>{Caixatext}</Text>
                {icon1?<View style={styles.boxtexticon}>
                    <TextInput style={styles.input}
                        value={props.value}
                        onChangeText={(texto) => props.setValue (texto)}
                        secureTextEntry={hidePass}
                    />
                    <TouchableOpacity onPress={ () => setHidePass(!hidePass)}>
                    { hidePass ?
                            <Ionicons name={"eye"} size={24} color={"#175F5F"}/>
                            :
                            <Ionicons name={"eye-off"} size={24} color={"#175F5F"}/>
                    }
                    </TouchableOpacity>
                </View>: null}
            </View>
        )
    }else{
        return<Splash/>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "85%",
        height: "13%",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingBottom: 40,
    },

    texto: {
        fontSize: 20,
        height: 30,
        fontFamily: "Prompt-Medium",
        color: "#E1FFB9",
    },

    boxtexticon: {
        flexDirection: "row",
        backgroundColor:"#E1FFB9",
        width: "100%",
        height: 30,
        alignItems: "center",
        borderRadius: 30,
    },

    input: {
        width: "90%",
        height: "100%",
        backgroundColor:"#E1FFB9",
        borderRadius: 30,
        paddingLeft: 10,
    },
}) 