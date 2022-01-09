import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: <YOURAPIKEY>,
  authDomain: <YOURAUTHDOAMIN>,
  projectId: <YOURPROJECTID>,
  storageBucket: <YOURSTORAGEBUCKET>,
  messagingSenderId: <YOURMESSAGINGSENDERID>,
  appId: <YOURAPPID>,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
