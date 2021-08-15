import { getDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase/init";

const useFirestoreDoc = ({ collectionId, docId }) => {
  const ref = doc(firestore, `${collectionId}/${docId}`);
  const getFirestoreDoc = async () => {
    await getDoc(ref);
  };

  return getFirestoreDoc;
};

export default useFirestoreDoc;
