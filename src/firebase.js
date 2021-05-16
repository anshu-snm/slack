// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBGUe78oX0nOR3N-z3H54UmLsQKFonWljI",
    authDomain: "slack-clone-1a588.firebaseapp.com",
    projectId: "slack-clone-1a588",
    storageBucket: "slack-clone-1a588.appspot.com",
    messagingSenderId: "701458179648",
    appId: "1:701458179648:web:ec07c3bcd8cad63bcfe1a5",
    measurementId: "G-GZPZ0BDVWM"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};