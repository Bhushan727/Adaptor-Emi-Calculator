
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApd_SBqfJQzpywsqhpqsbNY9yhxa7u77E",
  authDomain: "fir-auth-6394c.firebaseapp.com",
  projectId: "fir-auth-6394c",
  storageBucket: "fir-auth-6394c.appspot.com",
  messagingSenderId: "563235979383",
  appId: "1:563235979383:web:f2fc23b71bae054dae0672",
  measurementId: "G-SKRVNMGRST"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };