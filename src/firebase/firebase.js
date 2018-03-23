import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCr8GmJUq-7muHhN8cBOp-tqTjQ3ZDi9BI",
  authDomain: "wobbly-8f04f.firebaseapp.com",
  databaseURL: "https://wobbly-8f04f.firebaseio.com",
  projectId: "wobbly-8f04f",
  storageBucket: "",
  messagingSenderId: "787468132464"
/*   apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID */
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
