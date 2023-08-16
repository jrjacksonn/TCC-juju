import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"
  
export default function Bretorno(props){
  
    const iconretorno = props.iconame2 
  
    return (
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Ionicons name={iconretorno} size={55} color={"#E1FFB9"}/>
      </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
    container : {
      width: 60,
      height: 50,
    }
  })