import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDN6xbmnNApMrNwwvCkqZSeyRrVR1WSI-A",
  authDomain: "banking-system-ed7d0.firebaseapp.com",
  projectId: "banking-system-ed7d0",
  storageBucket: "banking-system-ed7d0.appspot.com",
  messagingSenderId: "1039537861172",
  appId: "1:1039537861172:web:432372055bdb161004d061"
};

const fdb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default fdb.database().ref();

export { db };