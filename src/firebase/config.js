import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBehR9CXHEpZwr0963Xqpg6yWVZDVzKBY8",
  authDomain: "cselec3-firebase.firebaseapp.com",
  projectId: "cselec3-firebase",
  storageBucket: "cselec3-firebase.appspot.com",
  messagingSenderId: "999999872154",
  appId: "1:999999872154:web:10cb209a702eb16c57d323",
  measurementId: "G-KM8Y7SYH5K"
};

  initializeApp(firebaseConfig);

  const db = getFirestore();

  export const auth=getAuth();
  export {db}