// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import the getAuth function from firebase/auth
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyA4dHHtzLx_EX-vkVKYOo4Qqwsh2Qze5jI",
  authDomain: "ads-dashboard-3daa1.firebaseapp.com",
  projectId: "ads-dashboard-3daa1",
  storageBucket: "ads-dashboard-3daa1.firebasestorage.app",
  messagingSenderId: "561045927500",
  appId: "1:561045927500:web:4ed6943f509719d11666e9",
  measurementId: "G-854SRBYL6P"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service 
const auth = getAuth(app)

//export the getAuth function
export {
   auth,
  }