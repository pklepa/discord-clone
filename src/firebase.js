import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyASOLQOgEXwdPJzEPtXVsyJko3TIjnbGAY",
  authDomain: "discount-discord.firebaseapp.com",
  databaseURL: "https://discount-discord.firebaseio.com",
  projectId: "discount-discord",
  storageBucket: "discount-discord.appspot.com",
  messagingSenderId: "640393466356",
  appId: "1:640393466356:web:ced4089621d11b41c3a9a1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
