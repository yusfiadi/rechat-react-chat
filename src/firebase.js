import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCOmrmLQ6MITgmH072AiegT5Rz7tUG-XjM",
  authDomain: "react-chat-875a7.firebaseapp.com",
  projectId: "react-chat-875a7",
  storageBucket: "react-chat-875a7.appspot.com",
  messagingSenderId: "355364758897",
  appId: "1:355364758897:web:a60cd651e24598837542d0"
}).auth()