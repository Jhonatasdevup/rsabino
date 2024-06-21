import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent:'center'
    },
    container2: {
      backgroundColor: "#FFF",
      width: 350,
      height: 600,
      marginBottom:80,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1.15,
      shadowRadius: 20.84,
      elevation: 10,
      justifyContent:'center',
      alignItems:'center',
      flexWrap:'wrap',
      alignContent:'center'
    },
    perfilFoto: {
      width: 50,
      height: 50,
      marginRight: 15,
    },
    containerTopFoto: {
      marginTop:15,
      marginBottom: 15,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });