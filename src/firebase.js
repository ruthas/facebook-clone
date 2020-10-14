import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFXFL28BuewYjhVBasPALGe05K71MQcao",
    authDomain: "facebok-clone-9aee5.firebaseapp.com",
    databaseURL: "https://facebok-clone-9aee5.firebaseio.com",
    projectId: "facebok-clone-9aee5",
    storageBucket: "facebok-clone-9aee5.appspot.com",
    messagingSenderId: "511034906976",
    appId: "1:511034906976:web:b8a59896234d237f66e605",
    measurementId: "G-HCP1YFDGZF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;