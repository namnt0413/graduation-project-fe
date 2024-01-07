// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import "firebase/compat/storage";
// import firebase from 'firebase/app'
// import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqs4D3RoEwGFyjXy_3Xg4YYv9qVm1olb4",
  authDomain: "web-programming-2737b.firebaseapp.com",
  projectId: "web-programming-2737b",
  storageBucket: "web-programming-2737b.appspot.com",
  messagingSenderId: "506951254975",
  appId: "1:506951254975:web:ed3c05f82f19492282170a",
  measurementId: "G-G70ZJLDXGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = firebase.storage()
// var storage = require('@google-cloud/storage')
// const storage = getStorage(app);
// const analytics = getAnalytics(app);

export  {
    // storage, firebase as default
  }
 