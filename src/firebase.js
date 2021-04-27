import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATq17PY6tMQ8ZaZRO9S1xGjLTOf2Y1xYs",
  authDomain: "disneyclone-47b09.firebaseapp.com",
  projectId: "disneyclone-47b09",
  storageBucket: "disneyclone-47b09.appspot.com",
  messagingSenderId: "499664446861",
  appId: "1:499664446861:web:dc1d79521d452e5f3f09c4",
  measurementId: "G-06WY3CSHL4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
