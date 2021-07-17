import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpmHmmP38kTcM7EmxBYnaG2X3hD0V4iQY",
    authDomain: "clone-93721.firebaseapp.com",
    projectId: "clone-93721",
    storageBucket: "clone-93721.appspot.com",
    messagingSenderId: "1000218767989",
    appId: "1:1000218767989:web:9e9a5bf1f36e0dc793fe3c",
    measurementId: "G-DBY5CQTV1K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };