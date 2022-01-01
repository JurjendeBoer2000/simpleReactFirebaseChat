import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB742Hba6Bgj_t47wLKk8ZVgJMTEsyikmk",
  authDomain: "firechat-2d9aa.firebaseapp.com",
  projectId: "firechat-2d9aa",
  storageBucket: "firechat-2d9aa.appspot.com",
  messagingSenderId: "506300123980",
  appId: "1:506300123980:web:c823361431d3f36fb95de9",
  measurementId: "G-JYS3V0BWFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore()

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
    }).catch((error) => {
       console.log(error)
    })
}

