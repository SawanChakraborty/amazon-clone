// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";

import "firebase/compat/auth"

import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA6YkpJ3yvKExeo80kCvE3ohh7Rv9dQWYw",
  authDomain: "challenge-7b003.firebaseapp.com",
  projectId: "challenge-7b003",
  storageBucket: "challenge-7b003.appspot.com",
  messagingSenderId: "426626101991",
  appId: "1:426626101991:web:3ac9d43750bf982215e842",
  measurementId: "G-MMD9JETLQH"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };