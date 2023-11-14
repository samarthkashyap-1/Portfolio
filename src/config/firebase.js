// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE,
  messagingSenderId: import.meta.env.VITE_REACT_APP_SENDER,
  appId: import.meta.env.VITE_REACT_APP_APPID,
  measurementId: import.meta.env.VITE_REACT_MEASUREID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

