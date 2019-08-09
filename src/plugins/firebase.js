import firebase from 'firebase';

export default function setupFirebase() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
