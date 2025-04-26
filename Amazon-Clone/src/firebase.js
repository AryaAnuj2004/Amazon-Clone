// import firebase from 'firebase'
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "Your API Key",
  authDomain: "Your Domain Name",
  databaseURL: "Your URL",
  projectId: "Your Project Id",
  storageBucket: "Your Bucket Spot",
  messagingSenderId: "Your message Id",
  appId: "Your App Id",
  measurementId: "Your Measurement Id"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp)

export {db , auth};