// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7CbNCU6ZIQ3_KdbNfse_AHeKIajraHrE",
  authDomain: "clone-10d3d.firebaseapp.com",
  projectId: "clone-10d3d",
  storageBucket: "clone-10d3d.appspot.com",
  messagingSenderId: "647758426757",
  appId: "1:647758426757:web:31627062009de4c67c6fec",
  measurementId: "G-7EPY21R58F",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export  {db , auth };
