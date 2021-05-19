import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB4qbywEpP7UJoIB55h--u4RnxTi7Jwp2s",
  authDomain: "react-clothing-62f75.firebaseapp.com",
  projectId: "react-clothing-62f75",
  storageBucket: "react-clothing-62f75.appspot.com",
  messagingSenderId: "296752862607",
  appId: "1:296752862607:web:1e427547bb74b20343a7fa",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
