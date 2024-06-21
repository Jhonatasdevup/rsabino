import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Keyboard  } from 'react-native'
import React,{useState} from 'react'


export default function index(props) {
    
 const [isLoading, setIsLoading] = useState(false)

  return (
    <View>
      <TouchableOpacity style={[styles.Butom, {backgroundColor: props.disabled ? 'gray' : '#FFF'}]} 
      disabled= {props.disabled}
      onPress={async () => {
        setIsLoading(true)
        Keyboard.dismiss()
        if(props.onClick){
          await props.onClick()
          
        }
        setIsLoading(false)
        
    }}
      activeOpacity={0.9}
      >

        <Text style={styles.textoB} 
        >
        {isLoading ? <ActivityIndicator size="small" color="#052F61" /> : "Entrar" }
        </Text>
                
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    Butom:{
        borderRadius: 75,
        borderWidth:1,
        marginTop:40,
        width:150,
        paddingHorizontal:20,
        paddingVertical:15
    },
    textoB:{
        textAlign: 'center',
        fontWeight:'500'
    }
})