// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHPu5xA7_4QZ7y9rDkhdoyBoMJN-GkLGI",
  authDomain: "umn-resume.firebaseapp.com",
  projectId: "umn-resume",
  storageBucket: "umn-resume.appspot.com",
  messagingSenderId: "489056116170",
  appId: "1:489056116170:web:ffdc5497ce914fd5194333",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

export default app;
