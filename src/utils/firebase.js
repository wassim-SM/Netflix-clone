import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBer93ySh_YIzX-rOIYpCQ93uvb27lkpP4",
  authDomain: "neflix-b53bc.firebaseapp.com",
  projectId: "neflix-b53bc",
  storageBucket: "neflix-b53bc.appspot.com",
  messagingSenderId: "487383685950",
  appId: "1:487383685950:web:c684e275207cf6b5e3ea6f",
  measurementId: "G-KYGR9QKBWR"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)