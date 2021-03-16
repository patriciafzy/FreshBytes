import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAgyusNRqHdwOGjG5d3BUqz98AhKvNXfq8",
    authDomain: "bt3103-main-project.firebaseapp.com",
    projectId: "bt3103-main-project",
    storageBucket: "bt3103-main-project.appspot.com",
    messagingSenderId: "485527610841",
    appId: "1:485527610841:web:b5360cb0de1dbf6c7ba5c8"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;