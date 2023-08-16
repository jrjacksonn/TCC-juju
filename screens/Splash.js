import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Splash(props){
  const imagem = require('../assets/images/iconlogo.png');
  const [timerOn, settimerOn] = useState(false)

  useEffect(() => {
    //console.log("Executando");
    if(timerOn == false){
      settimerOn(true)
      setTimeout(() => {
        props.navigation && props.navigation.navigate("Login");
        },2000);
    }
  },[]);

    return (
        <View style={styles.container}>
          <Image source={imagem} style={styles.imagem}/>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#178f64',
      justifyContent: "center",
      alignItems: "center"
    },
    imagem: {
      width: 380,
      height: 220,
    }
})


