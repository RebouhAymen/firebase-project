import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALfGwJbKIAYm0aX9N99pRJwRMpaa_ZdUU",
  authDomain: "devrabiccourse.firebaseapp.com",
  projectId: "devrabiccourse",
  storageBucket: "devrabiccourse.appspot.com",
  messagingSenderId: "193431234489",
  appId: "1:193431234489:web:3bee62a08d36117495f868",
  measurementId: "G-BY06VKHE5N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const provider = new GoogleAuthProvider();
