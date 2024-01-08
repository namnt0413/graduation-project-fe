
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebase = {
  apiKey: "AIzaSyC_u973BvzN14glL4d4XF41apxu_rEQGh0",
  authDomain: "crowdsourcing-9c7fd.firebaseapp.com",
  projectId: "crowdsourcing-9c7fd",
  storageBucket: "crowdsourcing-9c7fd.appspot.com",
  messagingSenderId: "412046647299",
  appId: "1:412046647299:web:aa99b89c72ea0ac07cee36"
};
// Initialize Firebase
const app = initializeApp(firebase);


export const storage = getStorage();
