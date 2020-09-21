import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAisRWeZZpKQwKyeeEhT8RX8PxlSdamAo0",
  authDomain: "clone-7ba26.firebaseapp.com",
  databaseURL: "https://clone-7ba26.firebaseio.com",
  projectId: "clone-7ba26",
  storageBucket: "clone-7ba26.appspot.com",
  messagingSenderId: "754350842815",
  appId: "1:754350842815:web:305f30c25f7c4579d3770a",
  measurementId: "G-FMXLQ1PSTK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseeApp.firestore();
const auth = firebase.auth();

export { db, auth };
