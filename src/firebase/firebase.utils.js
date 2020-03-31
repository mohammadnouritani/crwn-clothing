import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCV9ajo2B7tB55cJ11D5gWWaMv7wAMsZJw",
    authDomain: "crwn-40f64.firebaseapp.com",
    databaseURL: "https://crwn-40f64.firebaseio.com",
    projectId: "crwn-40f64",
    storageBucket: "crwn-40f64.appspot.com",
    messagingSenderId: "920097871666",
    appId: "1:920097871666:web:c20d1d608a9da0cb5f292b"
  };
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
