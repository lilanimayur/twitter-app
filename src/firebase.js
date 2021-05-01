import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkquHCvbHb8mnO_c-1KsLIAtyRMZkMApk",
    authDomain: "twitter-clone-921.firebaseapp.com",
    projectId: "twitter-clone-921",
    storageBucket: "twitter-clone-921.appspot.com",
    messagingSenderId: "738548471919",
    appId: "1:738548471919:web:9a433dea21a3d6898a159a",
    measurementId: "G-Y3E47SZMBK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;