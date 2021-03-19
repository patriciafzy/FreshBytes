import './firebase.js';
import database from './firebase.js';

export function validateLogin(username, password) {
    return database.collection('users').doc(username).get().then(snapshot => {
        if (!snapshot.exists) {
            return false;
        }

        const userData = snapshot.data();

        if (password != userData.password) {
            return false;
        }

        return true;
    })
}

export function addListing(item) {
        database.collection("items").add(item).then(() => location.reload());
        alert("Listing successfully added!")
}