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
export function getUserDetails(username, userType) {
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
 * Gets orders with listing for the associated user.
 * @param {String} userType 
 * @param {String} userId 
 * @returns A Promise of an array of all order data related to the user ID.
 */
export function getUserOrdersWithListing(userType, userId) {
    const formatUserType = userType == "customer" ? "customers" : "businesses";
    const docRef = database.collection(formatUserType).doc(userId);

    return database.collection("orders")
        .where(userType, "==", docRef)
        .get().then(snapshot => {
            return snapshot.docs;
        }).then(orders => {
            var allOrders = [];
            orders.forEach(order => {
                extractListing(order).then(actual => {
                    allOrders.push(actual);
                });
            });
            return allOrders;
        });
}

/**
 * Extracts the actual listing data from an order snapshot
 * @param {firebase.firestore.QueryDocumentSnapshot} order 
 * @returns The order's data with the actual listing data 
 * instead of a document reference, and the order's document id 
 * added on as a field.
 */
async function extractListing(order) {
    var actualOrder = {};

    // Copy over all fields other than listingID
    // Use document reference in listingID to query
    for (const property in order.data()) {
        if (property != "listingID") {
            actualOrder[property] = order.data()[property];
        } else {
            let listingRef = order.data()[property];
            var actualListing = await getFromDocRef(listingRef);
            actualOrder[property] = actualListing;
        }
        // Add ID as a field to the created order object
        actualOrder.id = order.id;
    }
    return actualOrder;
}

/**
 * Gets document data via a document reference
 * @param {firebase.firestore.DocumentReference} docRef
 * @returns A Promise resolving into a data object of the document
 */
function getFromDocRef(docRef) {
    return docRef.get().then(snapshot => {
        return snapshot.data();
    });
}
    




