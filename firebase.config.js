import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCt881Whr_wRdjoiXMaYT9tDVWoFMjM8Dk",
  authDomain: "aiday-marlen-kyzy.firebaseapp.com",
  databaseURL: "https://aiday-marlen-kyzy.firebaseio.com",
  projectId: "aiday-marlen-kyzy",
  storageBucket: "aiday-marlen-kyzy.appspot.com",
  messagingSenderId: "215890159247",
  appId: "1:215890159247:web:6c6e0a7e5262a3e57372fa",
  measurementId: "G-X55KFKXFK7"
};
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;