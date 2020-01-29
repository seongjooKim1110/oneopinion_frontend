import * as firebase from "firebase";
import "firebase/firestore";
// Initialize Firebase
import { firebaseConfig } from "./config";
firebase.initializeApp(firebaseConfig);

export default firebase;
