import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7c3hMEQL1wNVmXJxjKj_FtiCeEfCQPNM",
    authDomain: "fir-75382.firebaseapp.com",
    projectId: "fir-75382",
    storageBucket: "fir-75382.appspot.com",
    messagingSenderId: "14313626835",
    appId: "1:14313626835:web:a39776fc8153b3210d8826",
    measurementId: "G-D70MLSP8DL"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };