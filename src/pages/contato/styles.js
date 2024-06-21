import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2:{
      backgroundColor: "#FFF",
      width: 350,
      height: 600,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1.15,
      shadowRadius: 20.84,
      elevation: 20,
      padding: 20,
      justifyContent:'center',
      alignItems:'center',
      flexWrap:'wrap',
      alignContent:'center',
      marginBottom:50
    },
    containerPerfil:{
      width: '110%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:15,
      borderBottomWidth:1,
    },
    perfilFoto:{
      width:120,
      height:120
    },
    containerPerfilText:{
      marginStart: 20
    },
    containerInfoPerfil:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-between',
      
      backgroundColor:'#f0f0f0',
      width:"100%",
      padding:12,
      marginTop:40,
      borderRadius:8
    },
    buttomIr:{
      backgroundColor:'#052E52',
      width:50, 
      height: 30, 
      borderRadius: 15,
      justifyContent:'center',
      alignItems:'center'
    }

});