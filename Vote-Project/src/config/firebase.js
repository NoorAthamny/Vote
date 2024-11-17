
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDDko9FsGzRWNUpYSy8Qoj-hYqauQVVwko",
  authDomain: "voteanime-d0936.firebaseapp.com",
  projectId: "voteanime-d0936",
  storageBucket: "voteanime-d0936.firebasestorage.app",
  messagingSenderId: "541536384134",
  appId: "1:541536384134:web:7cc6518f9b048482120d07",
  measurementId: "G-PNXTWPWC5L"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
