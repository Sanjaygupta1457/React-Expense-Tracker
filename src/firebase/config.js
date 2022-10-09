import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBISDe6nwEIQmPN2BP_FZ6hpj4GlQN_kQ8",
  authDomain: "expenses-219ef.firebaseapp.com",
  databaseURL: "https://expenses-219ef-default-rtdb.firebaseio.com",
  projectId: "expenses-219ef",
  storageBucket: "expenses-219ef.appspot.com",
  messagingSenderId: "476073567075",
  appId: "1:476073567075:web:e35d1209a58bd01496a956",
  measurementId: "G-HZZZH6BV9T"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;

  export const db = getFirestore(app);