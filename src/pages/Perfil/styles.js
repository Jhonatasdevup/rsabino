import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    perfilFoto:{
        width:200,
        height: 200,
        borderRadius: 999,
        marginBottom:-130,
    },
    infPerfil:{
        backgroundColor:'#FFF',
        width:300,
        height:150,
        borderRadius:20,
        shadowColor:'#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1.25,
        shadowRadius: 20.84,
        elevation: 10,
        marginBottom:10,
        marginTop:150,
        paddingHorizontal:10,
        justifyContent:'space-evenly'
    },
    TextoPerfil:{
        fontSize: 20,
        fontWeight: '500',
        marginTop: 25,
        marginBottom: 20
    },
    boxFont:{
        backgroundColor:'#F0f0f0f0',
        width: '100%',
        padding:10,
        borderRadius: 8
    },
    boxText:{
        fontSize:15
    }

});