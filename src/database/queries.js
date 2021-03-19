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

/*
    Assume username is unique for now
 */
export function getCustomerDetails(username) {
    return database.collection('customers')
        .where("username", "==", username)
        .get().then(snapshot => {
            return snapshot.docs;
        });
}


export function getUserType(docId) {
    return database.collection('users')
        .doc(docId).get().then(snapshot => {
            let isCustomer = snapshot.data().isCustomer;

            if (isCustomer) {
                return "customer";
            } else {
                return "business";
            }
        });
}
    

    




