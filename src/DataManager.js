import firebase from "firebase"

firebase.initializeApp({
    apiKey: "AIzaSyAty9oiWEgRVNtJw88h318eW7HEr3QRbTQ",
    authDomain: "lottery-dd6cf.firebaseapp.com",
    projectId: "lottery-dd6cf",
    storageBucket: "lottery-dd6cf.appspot.com",
    messagingSenderId: "545206738754",
    appId: "1:545206738754:web:c6bac779d12cf962ce32db",
    measurementId: "G-L8FHS14THJ"
});

var db = firebase.database();

export {db}