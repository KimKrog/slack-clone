import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey           : "AIzaSyD2OPb_qdlt0zlzItw6G5Sfj42G15wYt4Q",
  authDomain       : "slack-clone-ade90.firebaseapp.com",
  projectId        : "slack-clone-ade90",
  storageBucket    : "slack-clone-ade90.appspot.com",
  messagingSenderId: "237253541980",
  appId            : "1:237253541980:web:dca4cabfac6f599056a699",
  measurementId    : "G-QTESYD88C4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db          = firebaseApp.firestore();
const auth        = firebase.auth();
const provider    = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
