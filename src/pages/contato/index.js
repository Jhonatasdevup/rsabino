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
            source={{uri: "https://static.wixstatic.com/media/e79934_4082e5877cd0437cafb13a521a35f511~mv2.png/v1/fill/w_614,h_533,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e79934_4082e5877cd0437cafb13a521a35f511~mv2.png"}}
            style={Styles.perfilFoto}
            resizeMode='contain'
            />
            <View style={Styles.containerPerfilText}>
                <Text style={{fontSize:18, marginBottom:5, fontWeight:'500'}}>Roberto Sabino</Text>
                <Text style={{fontSize:12}}>Professor e Consultor - Office Resolve {'\n'}Especialista em Eng. de Software{'\n'} R.Sabino Cursos</Text>
            </View>
        </View>

        <F/>

    </View>
    
    </SafeAreaView>
    </LinearGradient>
);
}
