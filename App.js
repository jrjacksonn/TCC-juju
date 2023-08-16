import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import IntroBV from "./screens/IntroBV"; 
import Home from "./screens/Home";


export default function App(){
  
  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{title: null, headerShown: null}} />
        <Stack.Screen name="Login" component={Login} options={{title: null, headerShown: null}} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{title: null, headerShown: null}}/>
        <Stack.Screen name="IntroBV" component={IntroBV} options={{title: null, headerShown: null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
 

//const Stack = createStackNavigator();

//return(
  //<NavigationContainer>
    //<Stack.Navigator>
      //<Stack.Screen name="Splash" component={Splash} options={{title: null, headerShown: null}} />
      //<Stack.Screen name="Login" component={Login} options={{title: null, headerShown: null}} />
     //<Stack.Screen name="Cadastro" component={Cadastro} options={{title: null, headerShown: null}}/>
     //<Stack.Screen name="IntroBV" component={IntroBV} options={{title: null, headerShown: null}}/>
    //</Stack.Navigator>
  //</NavigationContainer>
//)