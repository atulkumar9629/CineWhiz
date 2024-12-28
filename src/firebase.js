import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_zBsUEMLVs46dno--nJZWqXOSibsZEMM",
  authDomain: "cinewhiz-2023.firebaseapp.com",
  databaseURL: "https://cinewhiz-2023-default-rtdb.firebaseio.com",
  projectId: "cinewhiz-2023",
  storageBucket: "cinewhiz-2023.appspot.com",
  messagingSenderId: "134090993555",
  appId: "1:134090993555:web:5968b25c6d97542a8b4266",
  measurementId: "G-BN9C22741C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;


