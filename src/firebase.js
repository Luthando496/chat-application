// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZXSmPEX3MzPGmJw8xevLczh5wawNWyQE",
  authDomain: "house-market-3d71c.firebaseapp.com",
  projectId: "house-market-3d71c",
  storageBucket: "house-market-3d71c.appspot.com",
  messagingSenderId: "891400926672",
  appId: "1:891400926672:web:3619290557b16259a735d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
