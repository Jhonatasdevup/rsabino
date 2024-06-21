import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  PixelRatio,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "./tema1Styles";
import { FlatList } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';


import Database from "./db";
const database = new Database()

export default function Tema(props) {
  const theme =  props.route.params.theme
  const user = props.route.params.user

  const [state, setState] = useState({
    questions: [],
    question: undefined,
  })

  useEffect(() => {
    database.getQuestions(theme).then((questions) => {
      console.log(questions);
      setState({
        questions:questions, 
        question: questions[0]});
    });
  }, []);



  const lastIndex = state.questions.length - 1
  const questionExist = state.question != undefined
  const isTheLast = questionExist ? state.question.key - 1 == lastIndex : false
  const letters = questionExist ?  Object.keys(state.question.answers).sort() :[]
  console.log(letters)
  const responses = letters.map(value => {
    return(
      {
        ...state.question.answers[value],
        letter: value
      }
    )
  })
  return (
    <LinearGradient colors={["#0A60AB", "#052E52"]} style={{ flex: 1 }}>
      <SafeAreaView style={Styles.container}>
        <View style={Styles.container2}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {theme.name}
          </Text>
          {state.question ? (
            <>
            <View style={styles.containerTema1}>
              
            <FlatList
            
            ListHeaderComponent={<View style={styles.viewTitle}><Text style={styles.textTitle}>{state.question.question}</Text></View> }
            style={{flexGrow:1, width: '100%'}}
            contentContainerStyle={{justifyContent:'center',  flexGrow:1}}
            data={responses}
            renderItem={(props) => 
              <Response 
                item={props.item} 
                onPress={(letter) =>{ 
                  setState((oldState) => {
                    let respostas = oldState.question.answers
                    
                    letters.forEach((letter2) => respostas[letter2] = {...respostas[letter2], marked: undefined})
                    
                    respostas[letter] = {
                      ...respostas[letter],
                      marked: true
                    }
                    
                    return {
                      ...oldState,
                      question: {
                        ...oldState.question,
                        answers: respostas  
                      }
                    }
                })

                }}/>}
            />
            </View>
            <View style={{ flexDirection: "row", width: "100%" }}>
            {state.question.key > 1 && (
              <TouchableOpacity style={Styles.butaoAcabei}
              onPress={()=>{
                if(state.question.key > 1){
                  setState((oldState => {
                    const targetIndex = oldState.question.key -2
                    return{
                      ...oldState, question: oldState.questions[targetIndex]
                    }
                  }))
                }
              }}
              >
                <Text
                  style={{ fontSize: 15, color: "#FFF", fontWeight: "bold" }}
                >
                  Voltar
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={async ()=> {
                if(isTheLast) {
                  // Se o usuário marcou, question.answers.A.marked = true
                  console.log('1. ')
                  const markedAnswers = state.questions.map((val) => {
                    const letters = Object.keys(val.answers)
                    const answers = letters.map((letter) => {
                      return val.answers[letter]
                    })
                    return {
                      question: val.question,
                      key: val.key,
                      markedAnswer: answers.find((val) => val.marked)
                    }
                  })
                  console.log('2. ')

                  await database.saveAnswers(theme, markedAnswers, user)
                  console.log('4. ')

                  props.navigation.goBack()
                }else{
                  setState(oldState => {
                    const targetIndex = oldState.question.key
                    return{
                      ...oldState, question: oldState.questions[targetIndex]
                    }
                  })
                }
              }}
              style={[Styles.butaoAcabei, { marginLeft: 'auto'}]}
            >
              <Text style={{ fontSize: 15, color: "#FFF", fontWeight: "bold" }}>
                { !isTheLast ?  'Próximo':'Finalizar' }
              </Text>
            </TouchableOpacity>
          </View>
          </>
          ) : (
            <ActivityIndicator color="#052E52" size="large" />
          )}

          
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const Response = props => {
  console.log('Props: ')
  console.log(props)
  return(
    <TouchableOpacity
    onPress={() => props.onPress(props.item.letter)}
    style={{flex:1, flexDirection: 'row', alignItems: 'center', alignContent: "center", backgroundColor: 'white'}}>
      <Text style ={[styles.textResp, {marginRight: 10}]}>{props.item.letter}</Text>
      {props.item.marked ? <AntDesign name='checkcircle' size={24} color="#052E52" />:
      <View style={{
        borderWidth: 1 / PixelRatio.get() ,
        borderColor: 'gray',
        width: 24,
        height: 24,
        borderRadius: 64
        }} />}
        <View style={{flexWrap: 'wrap', width: '100%'}}>
    
      <Text style={[styles.textResp, {flexWrap: 'wrap'}]}>{props.item.label}</Text>
    
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerTema1: {
    flex: 1,
    width: 300,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "stretch",
    paddingVertical: 15,
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  viewTitle:{
    backgroundColor: "#f0f0f0",
    flex:1,
    width:"100%"
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
  },
  textResp: {
    fontSize: 14,
    flexWrap: "wrap",
    marginVertical: 10,
  },
  containerRespostas: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttomRespCorreta: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    marginTop: 15,
  },
});
