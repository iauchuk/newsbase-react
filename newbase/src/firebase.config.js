import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZPH0d_ZK0HC6htJauwG-PIpcZyVSLCXo",
  authDomain: "newsbase-react.firebaseapp.com",
  projectId: "newsbase-react",
  storageBucket: "newsbase-react.appspot.com",
  messagingSenderId: "536710551117",
  appId: "1:536710551117:web:581226c9f482dfd2c8ee04",
  measurementId: "G-NH1KX5W2TS"
};

const appFirebase = initializeApp(firebaseConfig);

export const dataBase = getFirestore(appFirebase);