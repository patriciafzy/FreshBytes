import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOQfQfOvB3q7euXKadJCWKmLRmFp7srzQ",
  authDomain: "freshbytes-ce003.firebaseapp.com",
  projectId: "freshbytes-ce003",
  storageBucket: "freshbytes-ce003.appspot.com",
  messagingSenderId: "659573047582",
  appId: "1:659573047582:web:0535b529ad16d67e50090f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const database = firebase.firestore();
