// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9MjZQv1JLQbq1EgS_UYzAIPf3Hc4k1JI",
  authDomain: "martial-art-client-side.firebaseapp.com",
  projectId: "martial-art-client-side",
  storageBucket: "martial-art-client-side.appspot.com",
  messagingSenderId: "964832964308",
  appId: "1:964832964308:web:b372a1267b60945c941541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
