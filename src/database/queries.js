import './firebase.js';
import database from './firebase.js';
import firebase from 'firebase';

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
 * Adds a listing to the database's items collections
 * TODO: add the business ID, reroute back to business listings page after completion
 * @param {item} Listing A dictionary of listing details
 */
export function addListing(item) {
    var basedata = item.picture.replace(/^data:image\/[a-z]+;base64,/, "");
    getImageUrl(basedata, item.name, 'items').then((url => {
        item.picture = url
        database.collection('items').add(item)
    }))
    alert("Listing successfully added!")
}

/**
 * Uploads a base64 image string to the Firebase storage and retrieves a url 
 * @param {*} baseUrl A base64 string of image data
 * @param {*} imageName The name of the image
 * @param {*} folderName The folder to store the image in the firebase storage.
 */
export function getImageUrl(baseUrl, imageName, folderName) {
    return new Promise((resolve, reject) => {
        var metadata = {contentType: 'image/jpeg'}
        let storageRef = firebase.storage().ref(folderName + '/' + imageName + ".jpeg").putString(baseUrl, 'base64', metadata)
        storageRef.on('state_changed', () =>  {}, (error) => {
            console.log(error.message); reject(error)}, async () => {
            const url = await storageRef.snapshot.ref.getDownloadURL();
            resolve(url);
        })})
}