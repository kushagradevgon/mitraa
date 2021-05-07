// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBwaAAYsbUoHnbXnVgaNTKRJX8IFP72JFY",
    authDomain: "mitraa-b6a02.firebaseapp.com",
    projectId: "mitraa-b6a02",
    storageBucket: "mitraa-b6a02.appspot.com",
    messagingSenderId: "889690744258",
    appId: "1:889690744258:web:53cb95c424db53d428a25b",
    measurementId: "G-W60350FZMK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;

