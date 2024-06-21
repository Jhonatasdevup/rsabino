import React,{useEffect, useState} from "react";
import { SafeAreaView, Image, View, Text, TextComponent, StyleSheet, Pressable, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Styles from "./styles";
import * as ImagePicker from 'expo-image-picker'
import ButtonSair from '../../components/Buttom2/index'
import { auth } from "../../services/firebaseConfig";


export default function App(props) {


  const [image, setImage] = useState(null);

  const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  console.log('Image: ')
  console.log(image)
return (
  
    <LinearGradient colors={['#0A60AB', '#052E52']} style={{flex:1}}>
    <SafeAreaView style={Styles.container}>
  <Pressable onPress={pickImage}>
  {image ? <Image
      source={{uri: image}}
      style={Styles.perfilFoto}
      resizeMode='contain'
      /> : <Image
      source={require('./../../assets/imgs/perfil.png')}
      style={Styles.perfilFoto}
      resizeMode='contain'
      /> }
      </Pressable>
      

       <View style={Styles.infPerfil}>

        <Text style={Styles.TextoPerfil}>Email de cadastro:</Text>

        <View style={Styles.boxFont}>
        <Text style={Styles.boxText}> {props.route.params.email} </Text> 
        </View>

        
      </View> 
      <Pressable style ={{
          padding: 10,
          marginBottom: 10,
          backgroundColor: '#F45866',
          width: 120,
          alignSelf: 'center',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={() => {
          auth.signOut()
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
          })
        }}>
          <Text style ={{color: 'white', fontSize: 18, fontWeight: '600', letterSpacing: 1.3}}>Sair</Text>
        </Pressable>
    </SafeAreaView>
    </LinearGradient>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    marginBottom: 20,
  },
  camera: {
    flex: 1,
  },
  infPerfil: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextoPerfil: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxFont: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  boxText: {
    fontSize: 16,
  },
});

