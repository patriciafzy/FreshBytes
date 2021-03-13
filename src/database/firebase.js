import firebase from 'firebase';
import 'firebase/firestore';
import '../../secret/firebase_key.js';

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;