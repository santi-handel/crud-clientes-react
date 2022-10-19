// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDasFhn5Z2BHOeyU3uq5c3uU15OoMLMaes",
  authDomain: "crud-1-8d44e.firebaseapp.com",
  databaseURL: "https://crud-1-8d44e-default-rtdb.firebaseio.com",
  projectId: "crud-1-8d44e",
  storageBucket: "crud-1-8d44e.appspot.com",
  messagingSenderId: "871525137880",
  appId: "1:871525137880:web:dec36cfa6d6cbc8ba7c6ad"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);