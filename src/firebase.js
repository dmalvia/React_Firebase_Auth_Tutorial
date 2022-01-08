import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSobRSmQo7pMikYW2o9Pxz9Ik4Ta6W8eY",
  authDomain: "phone-auth-84547.firebaseapp.com",
  projectId: "phone-auth-84547",
  storageBucket: "phone-auth-84547.appspot.com",
  messagingSenderId: "256324206160",
  appId: "1:256324206160:web:a03df6c891070867585b55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
