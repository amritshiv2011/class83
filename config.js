import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC6umJdK2cJ9RqT3K0SljMv4p9ohDgmRX0",
  authDomain: "barter-c530d.firebaseapp.com",
  projectId: "barter-c530d",
  storageBucket: "barter-c530d.appspot.com",
  messagingSenderId: "996062083126",
  appId: "1:996062083126:web:ec1d753d240083f03b8097"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
