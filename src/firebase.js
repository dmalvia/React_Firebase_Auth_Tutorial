import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG39BbXvUfivdkQv5KFh91gDC8AQpUBlE",
  authDomain: "reactauthentication-baaba.firebaseapp.com",
  projectId: "reactauthentication-baaba",
  storageBucket: "reactauthentication-baaba.appspot.com",
  messagingSenderId: "496879194154",
  appId: "1:496879194154:web:c9102295f44fd72bd6b353",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
