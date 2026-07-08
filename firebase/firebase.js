<// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

// Authentication
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firestore
import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM1nSzVZFS6qBr7FfFl_9BUJeZ8_PmBsQ",
  authDomain: "pakistan-aerial-archive.firebaseapp.com",
  projectId: "pakistan-aerial-archive",
  storageBucket: "pakistan-aerial-archive.firebasestorage.app",
  messagingSenderId: "663091537448",
  appId: "1:663091537448:web:c7b06f37e22b93ef36b71d"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export functions we'll use later
export { createUserWithEmailAndPassword, doc, setDoc };