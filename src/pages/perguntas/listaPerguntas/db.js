
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";


export default class Database {
    getThemes() {
        return new Promise (async (resolve, reject) => {
            try {
                const querySnapshot = await getDocs (collection(db, "themes"))
                const documents = querySnapshot.docs.map((val)=>{
                return val.data()
            })
            resolve(documents)
            } catch (error) {
            reject(error)
            }
            
        })
    }
    getQuestions(theme) {
        return new Promise( async (resolve, reject) => {
            try {
                const docRef = await getDocs( collection(db, "themes", theme.id, "questions"))
                let documents = docRef.docs.map((val)=>{
                    return val.data()
                })
                documents = documents.filter((val)=>{
                    return !val.nextQuestion
                })
                console.log(documents);
                resolve(documents)
            } catch (error) {
                reject(error)
            }
        })
    }
    saveAnswers(theme, answers, user){
        return new Promise( async (resolve, reject) => {
            try {
                await setDoc(doc(db,"themes", theme.id, "answers", user.uid), {answers})
                resolve(true)
            } catch (error) {

                reject(error)
            }
        })
    }
}