import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'ninja-chat-84866.firebaseapp.com',
  databaseURL: 'https://ninja-chat-84866.firebaseio.com',
  projectId: 'ninja-chat-84866',
  storageBucket: 'ninja-chat-84866.appspot.com',
  messagingSenderId: '365454909365',
  appId: '1:365454909365:web:39b35b0fc40530997d83fc'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
export default firebaseApp.firestore()
