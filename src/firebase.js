import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkaXb-cp4Xht2vSKQxM5Nx2YH0olrymVc",
  authDomain: "lknc-pos.firebaseapp.com",
  projectId: "lknc-pos",
  storageBucket: "lknc-pos.firebasestorage.app",
  messagingSenderId: "798630785378",
  appId: "1:798630785378:web:80325bbda2115ff062fc3b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
