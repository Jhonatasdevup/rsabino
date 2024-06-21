import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native'
import Styles from "./styles";

import { AntDesign } from '@expo/vector-icons';

const Icon = (label) => <AntDesign name={label} size={34} color="#052E52" />
const data = [
    {
        key: 1,
        icon: Icon('linkedin-square'),
        label: 'R.Sabino Cursos',
        link: 'https://www.linkedin.com/company/r-sabino-cursos/?originalSubdomain=br'
    },
    {
        key: 2,
        icon: Icon('instagram'),
        label: 'Instagram',
        link: 'https://www.instagram.com/officeresolvebr/'
    },
    {
        key: 3,
        icon: Icon('youtube'),
        label: 'Office Resolve',
        link: 'https://www.youtube.com/@OfficeresolveBr'
    },
    {
        key: 4,
        icon: Icon('ie'),
        label: 'www.officeresolve.com.br',
        link: 'https://www.officeresolve.com.br/'
    }
]

const renderItem = ({item}) => (
    <View style={Styles.containerInfoPerfil}>
     {item.icon}
    <Text>{item.label}</Text> 
    <TouchableOpacity 
        style={Styles.buttomIr}
        onPress={async()=> {
            await Linking.openURL(item.link) 
        }}
        >
        <Text style={{color: '#FFF', fontSize:13, fontWeight:'500'}}>Ir</Text>
    </TouchableOpacity>
    </View>
);


export default () => {
  return (
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item)=> item.key.toString()}
    showsVerticalScrollIndicator={false}
    />
  )
}