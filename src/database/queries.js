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
 * @returns The user details
 */
export function getCustomerDetails(username) {
    return database.collection('customers')
        .where("username", "==", username)
        .get().then(snapshot => {
            return snapshot.docs;
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
 * @returns All orders related to the user ID.
 */
export function getUserOrders(userType, userId) {
    let formatUserType = userType == "customer" ? "/customers/" : "/businesses/"
    let userKey = formatUserType + userId


    return database.collection("orders")
        .where(userType, "==", userKey)
        .get();
}
    




