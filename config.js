import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCYCl_uia6chzvmblWQsCJQp21QNz5n1jQ",
  authDomain: "book-santa-74edb.firebaseapp.com",
  projectId: "book-santa-74edb",
  storageBucket: "book-santa-74edb.appspot.com",
  messagingSenderId: "537957696578",
  appId: "1:537957696578:web:f2bf057fe2df6ff79fd9db",
  measurementId: "G-01L0KBN9CM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
