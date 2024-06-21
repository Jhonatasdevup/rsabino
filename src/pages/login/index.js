import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './styles';

import InputP from '../../components/Imput/imput'
import Botton from '../../components/Buttom'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig"

export default function App({ navigation }) {
  const [textoS, setTextoS] = useState('')
  const [senhaS, setSenhaS] = useState('')

  const buttomIsDisabled = (textoS && senhaS) ? (textoS.length > 0 && senhaS.length > 0) : false

  const signIn = async () => {
     await signInWithEmailAndPassword(auth, textoS, senhaS)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    navigation.navigate('Inicial', {user: {email: user.email, displayname: user.displayName, uid: user.uid}})
    })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
  }

  return ( 
  <LinearGradient colors={['#0A60AB', '#052E52']} style={{flex:1}}>
    <SafeAreaView style={Styles.container}>
      <Image
      source={require('./../../assets/imgs/rsabino_logo.png')}
      style={Styles.logoP}
      resizeMode='contain'
      />
      
      <InputP 
      text="Cadastro :" 
      onFinish= {(text) => {
        setTextoS(text)
      }}/>

      <InputP text="Senha :" 
      secure={true} 
      sonumero={'numeric'}
      onFinish= {(text) => {
        setSenhaS(text)
      }}
      />

      <Botton disabled={!buttomIsDisabled} navegar={navigation} onClick={signIn}/>

      {/* <Button title='oi' onPress={() => navigation.navigate('Inicial')}/> */}

      <TouchableOpacity>
      <Text style={Styles.textSemCadastro}>Não tenho cadastro</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  </LinearGradient>
  );
}

