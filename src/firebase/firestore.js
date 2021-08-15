import { doc, getDoc, collection } from "@firebase/firestore";
import { firestore } from "./init";

export const usersRef = collection(firestore, "users");
export const userPostsRef = collection(firestore, "posts");
export const followersRef = collection(firestore, "followers");

export const getUserData = async (uid) => {
  const ref = doc(firestore, `users/${uid}`);

  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    return docSnap.data();
  }
};
