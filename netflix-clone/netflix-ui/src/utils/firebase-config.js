
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD_b0wwvfJWYW_GGT0Ij-OgSB5eYMxJPHg",
  authDomain: "netflix-clone-21065.firebaseapp.com",
  projectId: "netflix-clone-21065",
  storageBucket: "netflix-clone-21065.appspot.com",
  messagingSenderId: "785831255420",
  appId: "1:785831255420:web:56033c9ee64941ab6418f9",
  measurementId: "G-1JLBLR84NX"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)