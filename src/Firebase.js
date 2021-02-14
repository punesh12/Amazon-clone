import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDmWhAUCf_LEGYMaciU1OIjK5bHUB8baW4",
    authDomain: "clone-96f95.firebaseapp.com",
    projectId: "clone-96f95",
    storageBucket: "clone-96f95.appspot.com",
    messagingSenderId: "787826553237",
    appId: "1:787826553237:web:bed5527b1bbfcbcad1c69c",
    measurementId: "G-SZV488CTY5"

});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth}; 