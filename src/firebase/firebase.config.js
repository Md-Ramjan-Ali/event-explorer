// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgmtPsc2voRqGTh82kXeecycxpGqEh878",
  authDomain: "event-explorer-91db7.firebaseapp.com",
  projectId: "event-explorer-91db7",
  storageBucket: "event-explorer-91db7.firebasestorage.app",
  messagingSenderId: "684453103785",
  appId: "1:684453103785:web:4d743d4409f6a12acb01b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
