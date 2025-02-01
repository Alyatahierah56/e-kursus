// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxJQd7vUkV3bvjL1Y7dx35duSMdZsbAaU",
  authDomain: "e-kursus.firebaseapp.com",
  projectId: "e-kursus",
  storageBucket: "e-kursus.firebasestorage.app",
  messagingSenderId: "304671893016",
  appId: "1:304671893016:web:549fa769417dde01d5056d",
  measurementId: "G-YFB78G4CPX"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
