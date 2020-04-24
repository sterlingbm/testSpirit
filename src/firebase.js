// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdBlTt2PUSGMJ_TcgvCw6oL-FtMAgnYos",
  authDomain: "reacttest-9e64a.firebaseapp.com",
  databaseURL: "https://reacttest-9e64a.firebaseio.com",
  projectId: "reacttest-9e64a",
  storageBucket: "reacttest-9e64a.appspot.com",
  messagingSenderId: "422606600714",
  appId: "1:422606600714:web:65128417181faba4e23df3"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
