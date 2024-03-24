// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyACpIiZ-Ir07yjmVbXnLcVjWfP2jDVCfK0",
//   authDomain: "geolocation-hackathon-1c5c7.firebaseapp.com",
//   projectId: "geolocation-hackathon-1c5c7",
//   storageBucket: "geolocation-hackathon-1c5c7.appspot.com",
//   messagingSenderId: "801766382886",
//   appId: "1:801766382886:web:1b1a121df330f9105235e7",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACpIiZ-Ir07yjmVbXnLcVjWfP2jDVCfK0",
  authDomain: "geolocation-hackathon-1c5c7.firebaseapp.com",
  projectId: "geolocation-hackathon-1c5c7",
  storageBucket: "geolocation-hackathon-1c5c7.appspot.com",
  messagingSenderId: "801766382886",
  appId: "1:801766382886:web:1b1a121df330f9105235e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);