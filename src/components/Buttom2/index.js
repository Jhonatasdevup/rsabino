import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function index(props) {
  
  const onPressHandler = () => {
    if (props.fun) {
      props.navigate.navigate(props.fun,props.params)
    } else {
      console.error('Função não encontrada:', props.fun);
    }
  };
  return (
    <TouchableOpacity style={[styles.container,
        {
          alignSelf: props.alignSelf,
          backgroundColor: props.color,
        }]}
        onPress={onPressHandler}
        >
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
      width:170,
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems: 'center',
        marginTop:10,
  },
  text: {
    textAlign:'center', 
    color:'#FFF', 
    fontSize:15, 
    paddingBottom: 3
  }
})
