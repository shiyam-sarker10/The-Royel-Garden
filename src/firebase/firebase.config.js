// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




















// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDAlBPobChpKTq23xRwUL8HwMyFIE5YXmo",
//   authDomain: "assigment-11-28aa2.firebaseapp.com",
//   projectId: "assigment-11-28aa2",
//   storageBucket: "assigment-11-28aa2.appspot.com",
//   messagingSenderId: "832597923582",
//   appId: "1:832597923582:web:a730904c3986f7966977af",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
