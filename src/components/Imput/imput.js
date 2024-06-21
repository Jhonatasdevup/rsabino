import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Imput(props) {
 return (
    <View>
    <Text style={styles.TextoI}>{props.text}</Text>
    <TextInput 
    style={styles.input} 
    secureTextEntry = {props.secure} 
    keyboardType={props.sonumero}
    onChange={(e)=> {
        const text = e.nativeEvent.text
        if (props.onFinish) props.onFinish(text)
    }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#FFF',
        borderWidth:1,
        borderRadius:10,
        paddingVertical:8,
        paddingHorizontal:10,
        width:250
    },
    TextoI:{
        fontSize:18,
        color: '#FFF',
        fontWeight:'bold',
        textAlign: 'left',
        marginBottom:5,
        marginTop:30,
    }
})