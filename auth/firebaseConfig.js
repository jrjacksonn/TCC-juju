// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRkQx22kf1iawpdBpHBwSNNxqVeMFMpVU",
  authDomain: "inflower-jj.firebaseapp.com",
  projectId: "inflower-jj",
  storageBucket: "inflower-jj.appspot.com",
  messagingSenderId: "119325751591",
  appId: "1:119325751591:web:f5346ebb45e66fbfa69102",
  measurementId: "G-0CSWYMB52V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {
    auth
}