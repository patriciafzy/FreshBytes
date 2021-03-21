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

/**
 * Gets user details via username
 * @param {String} username  CURRENTLY ASSUME THAT THIS IS BEING STORED AFTER LOGIN
 * @returns A QueryDocumentSnapshot of user details
 */
export function getCustomerDetails(username, userType) {
    const formatUserType = userType == "customer" ? "customers" : "businesses";

    return database.collection(formatUserType)
        .where("username", "==", username)
        .get().then(snapshot => {
            return snapshot.docs[0];
        });
}

/**
 * Gets user type
 * @param {String} username
 * @returns Either customer or business
 */
export function getUserType(username) {
    return database.collection('users')
    .where("username", "==", username)
    .get().then(snapshot => {
        let isCustomer = snapshot.docs.map(x => x.data())[0];

        if (isCustomer) {
            return "customer";
        } else {
            return "business";
        }

    });
 
}


/**
 * Gets orders for the associated user.
 * @param {String} userType 
 * @param {String} userId 
 * @returns An array of QueryDocumentSnapshot of all orders related to the user ID.
 */
export function getUserOrders(userType, userId) {
    const formatUserType = userType == "customer" ? "customers" : "businesses";
    const docRef = database.collection(formatUserType).doc(userId);

    return database.collection("orders")
        .where(userType, "==", docRef)
        .get().then(snapshot => {
            return snapshot.docs;
        });
}

export function getFromDocRef(docRef) {
    return docRef.get();
}
    




