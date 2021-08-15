import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import firebaseConfig from "./fbConfig";
const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export const logOut = () => signOut(auth);
export const googleSignIn = async () => {
  await signInWithPopup(auth, provider).catch((err) => alert(err));
};
