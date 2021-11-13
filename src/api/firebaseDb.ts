import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeBjMUDLJzPYumSOIAS0PKDFH55F9Qs-0",
  authDomain: "first-vue-js-project-70bf7.firebaseapp.com",
  projectId: "first-vue-js-project-70bf7",
  storageBucket: "first-vue-js-project-70bf7.appspot.com",
  messagingSenderId: "1031769150788",
  appId: "1:1031769150788:web:4f3b91e398986bdf823311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db,
};
