import React from "react";
import { SafeAreaView,  Image, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Styles from "./styles";
import F from "./fletlist";

export default function App(props) {
return (

    <LinearGradient colors={['#0A60AB', '#052E52']} style={{flex:1}}>
    <SafeAreaView style={Styles.container}>

    <View style={Styles.container2}>

        <View style={Styles.containerPerfil}>
            <Image
            source={require('./../../assets/imgs/perfilEstudos.png')}
            style={Styles.perfilFoto}
            resizeMode='contain'
            />
            <View style={Styles.containerPerfilText}>
                <Text style={{fontSize:18, marginBottom:5, fontWeight:'500'}}>Roberto Sabino</Text>
                <Text style={{fontSize:12}}>Lorem ipsum dolor sit amet,{'\n'} consectetur adipiscing elit, sed {'\n'}do eiusmod tempor incididunt ut {'\n'}labore et dolore magna aliqua.</Text>
            </View>
        </View>

        <F/>

    </View>
    
    </SafeAreaView>
    </LinearGradient>
);
}
