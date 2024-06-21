import React, {useEffect, useState} from 'react';
import { View, FlatList, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Button2 from '../../components/Buttom2/index';

import Database from "./listaPerguntas/db";
import { activate } from 'firebase/remote-config';
const database = new Database()

export default function MyComponent(props) {
  useEffect(()=>{
    database.getThemes().then(documents => setThemes(documents))
  },[])

  const [themes, setThemes] = useState(null)
  

  const renderItem = ({ item }) => (
    <View style={styles.containerTema1}>
              <Image
                source={{uri: item.banner}}
                style={styles.fotoTema}
                resizeMode="contain"
              />
              <Text style={styles.textTitle}>{item.name}</Text>
              <Text style={styles.textDesc}> {item.description} </Text>

              <Button2 
                alignSelf='flex-end' 
                text="Iniciar perguntas" 
                color='#052E52' 
                fun={"Theme"} 
                params={{theme: item, user: props.user}}
                navigate={props.navegador}/>
            </View>
  );


  return (
    <>
    {themes ? 
      <FlatList
      data={themes}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}/> 
      : 
      <ActivityIndicator color={"blue"} size={"large"}/>}
    </>
  );
}

const styles = StyleSheet.create({
    containerTema1:{
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        alignContent:'center',
        paddingHorizontal:10,
        paddingVertical:15,
        borderStyle:'solid',
        borderBottomWidth:1,
        
      },
      textTitle:{
        fontSize: 16, 
        fontWeight: "500", 
        textAlign: 'center', 
        alignSelf:'flex-start'
      },
      textDesc:{
        fontSize: 13, 
        textAlign: 'left',
        marginTop: 10
      },
      fotoTema: {
        width: 320,
        height: 170,
        marginBottom:5
      },
})
