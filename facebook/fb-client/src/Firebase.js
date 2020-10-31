// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCMgey8jXJxGkDqulWk_j4DvkomBQAAAm8",
    authDomain: "facebook-clone-2d4bc.firebaseapp.com",
    databaseURL: "https://facebook-clone-2d4bc.firebaseio.com",
    projectId: "facebook-clone-2d4bc",
    storageBucket: "facebook-clone-2d4bc.appspot.com",
    messagingSenderId: "32917560090",
    appId: "1:32917560090:web:2f7abc55a1634105ba2aa3",
    measurementId: "G-7S65XSJGF9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;