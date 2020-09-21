import firebase from "firebase";

const firebaseConfig = {};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseeApp.firestore();
const auth = firebase.auth();

export { db, auth };
