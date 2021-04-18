import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnLNY9Vt_AUT4xpklQTWd99uPaVX9EELA",
  authDomain: "fresher-bytes.firebaseapp.com",
  projectId: "fresher-bytes",
  storageBucket: "fresher-bytes.appspot.com",
  messagingSenderId: "243166399232",
  appId: "1:243166399232:web:6c6afc2a8dff08806dc1e5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const database = firebase.firestore();
