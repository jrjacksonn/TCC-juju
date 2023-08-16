import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"
import { Entypo } from '@expo/vector-icons';
import { View } from "react-native";
  
export default function Ccomando(props){
  
    const icon = props.icone 
    const icon2 = props.icone2
    const icon3 = props.icone3
    const icon4 = props.icone4
  
    return (
     <View style={styles.container}>
        <TouchableOpacity style={styles.home}>
        <Entypo name={icon} size={40} color={"white"}/>          
        </TouchableOpacity>
        <TouchableOpacity style={styles.home}>
        <Ionicons name={icon2} size={55} color={"white"}/>          
        </TouchableOpacity>
        <TouchableOpacity style={styles.home}>
        <Ionicons name={icon3} size={55} color={"white"}/>          
        </TouchableOpacity>
        <TouchableOpacity style={styles.home}>
        <Ionicons name={icon4} size={55} color={"white"}/>          
        </TouchableOpacity>
     </View>
    )
  }
  
  const styles = StyleSheet.create({
    container : {
      width: 60,
      height: 50,
    }
  })