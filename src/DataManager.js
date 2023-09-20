import firebase from "firebase"

firebase.initializeApp({
    /* credentials */
});

var db = firebase.database();

export {db}