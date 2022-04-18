import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9WojWuIkR9u4IKCmrJE5PHAm4aUGoulw",
  authDomain: "booking-cd3a9.firebaseapp.com",
  projectId: "booking-cd3a9",
  storageBucket: "booking-cd3a9.appspot.com",
  messagingSenderId: "220859845471",
  appId: "1:220859845471:web:9f04742044935702cec4ea",
  measurementId: "G-R9KMB2MYTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
