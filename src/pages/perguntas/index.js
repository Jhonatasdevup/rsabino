import React, {useEffect} from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Flat from '../perguntas/flatlist'
import Styles from './styles'
//import { SafeAreaView } from "react-native-safe-area-context";

export default function App({ route,navigation }) {
  const user = route.params
  return (
    <LinearGradient colors={["#0A60AB", "#052E52"]} style={{ flex: 1 }}>
      <SafeAreaView style={Styles.container}>
        
        <View style={Styles.container2}>
          <Flat user={user} navegador={navigation}/>
        </View>
        
      </SafeAreaView>
    </LinearGradient>
  );
}
