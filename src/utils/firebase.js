import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0KUiWmRqYfcnJ4prToyyE6_tGg4vtTuE",
  authDomain: "jadeoneats.firebaseapp.com",
  projectId: "jadeoneats",
  storageBucket: "jadeoneats.appspot.com",
  messagingSenderId: "822370675783",
  appId: "1:822370675783:web:ccb8bd6ca957ede58fd562",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const google_provider = new GoogleAuthProvider();

