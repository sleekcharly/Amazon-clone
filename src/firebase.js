// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5KfMrjziRtrC-Z4SCCWR7DUdIQOCqS3c",
  authDomain: "clone-f0e6f.firebaseapp.com",
  databaseURL: "https://clone-f0e6f.firebaseio.com",
  projectId: "clone-f0e6f",
  storageBucket: "clone-f0e6f.appspot.com",
  messagingSenderId: "1077106614540",
  appId: "1:1077106614540:web:e35d8712a8157d158d2929",
  measurementId: "G-BP9Z5FDXPV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
