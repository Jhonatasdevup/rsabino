// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp7t-RQ9SJpiq-gMPWrIkFM3l18ThKT4c",
  authDomain: "rsabino-72796.firebaseapp.com",
  projectId: "rsabino-72796",
  storageBucket: "rsabino-72796.appspot.com",
  messagingSenderId: "164086960473",
  appId: "1:164086960473:web:773712e7256b794800fc48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

export const db = getFirestore(app)