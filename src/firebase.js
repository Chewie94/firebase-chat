import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-2LChnxR5-dY0p59AD94tghHRvJc_dm8",
  authDomain: "chat-9a8b3.firebaseapp.com",
  projectId: "chat-9a8b3",
  storageBucket: "chat-9a8b3.appspot.com",
  messagingSenderId: "94682415129",
  appId: "1:94682415129:web:ed3c77c6cfabd08500aa88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()