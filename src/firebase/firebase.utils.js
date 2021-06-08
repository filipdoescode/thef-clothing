import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBOkV92mlam8RyKYju3KS2ZlxdWo-ymaqo",
  authDomain: "thef-clothing.firebaseapp.com",
  projectId: "thef-clothing",
  storageBucket: "thef-clothing.appspot.com",
  messagingSenderId: "454392492403",
  appId: "1:454392492403:web:0bce3670cecab3d01b9506",
  measurementId: "G-8CKP7Y55DE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
