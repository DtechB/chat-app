import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPGCRn0OXuUt5QlFkFKr_AUg8ikMwp4mI",
  authDomain: "chat-app-16841.firebaseapp.com",
  projectId: "chat-app-16841",
  storageBucket: "chat-app-16841.appspot.com",
  messagingSenderId: "319337502219",
  appId: "1:319337502219:web:eac3a48ae008cef0ed590e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
};
