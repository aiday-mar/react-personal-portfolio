import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCt881Whr_wRdjoiXMaYT9tDVWoFMjM8Dk',
  authDomain: 'aiday-marlen-kyzy.firebaseapp.com',
  databaseURL: 'https://aiday-marlen-kyzy.firebaseio.com',
  projectId: 'aiday-marlen-kyzy',
  storageBucket: 'aiday-marlen-kyzy.appspot.com',
  messagingSenderId: '215890159247',
  appId: '1:215890159247:web:6c6e0a7e5262a3e57372fa',
  measurementId: 'G-X55KFKXFK7',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const firestore = firebase.firestore();

export { firestore, storage };
