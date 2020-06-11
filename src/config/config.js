import Firebase from 'firebase';
let config = {
    // apiKey: "AIzaSyAQnWmQCLmgiHMezcYTwPgUdU0-zNtoNRk",
    // authDomain: "spry-rocks.firebaseapp.com",
    // databaseURL: "https://spry-rocks.firebaseio.com",
    // projectId: "spry-rocks",
    // storageBucket: "spry-rocks.appspot.com",
    // messagingSenderId: "542985533123",
    // appId: "1:542985533123:web:cc1d3a080f8f19ec5ad476"
};
let app = Firebase.initializeApp(config);
export const db = app.database();