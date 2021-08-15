import { doc, getDoc, collection } from "@firebase/firestore";
// import { getDocs } from "firebase/firestore";
import { firestore } from "./init";

export const usersRef = collection(firestore, "users");
export const userPostsRef = collection(firestore, "userPosts");
export const usernameRef = collection(firestore, "usernames");
export const likesRef = collection(firestore, "likes");
export const storiesRef = collection(firestore, "stories");
export const followersRef = collection(firestore, "followers");
export const followingRef = collection(firestore, "following");

export const getFollowerCount = async (uid) => {
  const ref = doc(firestore, usersRef, uid);

  await getDoc(ref)
    .then((result) => {
      const data = result.data();
      if (data) {
        const { followerCount } = data;
        return followerCount;
      }
    })
    .catch((err) => console.log(err));
};

export const getFollowingCount = async (uid) => {
  const ref = doc(firestore, usersRef, uid);

  await getDoc(ref)
    .then((result) => {
      const data = result.data();
      if (data) {
        const { followingCount } = data;
        return followingCount;
      }
    })
    .catch((err) => console.log(err));
};

export const getPostsCount = async (uid) => {
  const ref = doc(firestore, usersRef, uid);

  await getDoc(ref)
    .then((result) => {
      const data = result.data();
      if (data) {
        const { postCount } = data;
        return postCount;
      }
    })
    .catch((err) => console.log(err));
};

export const getUserData = async (uid) => {
  const ref = doc(firestore, `users/${uid}`);

  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    return docSnap.data();
  }
};

// export const getUserPosts = async (uid) => {
//   const snap = await getDocs(collection(firestore, `${userPostsRef}/${uid}/posts`));
//   snap
//     .forEach((doc) => {
//       const data = doc.data();
//       if (data) {
//         return {
//           data,
//         };
//       }
//     })
//     .catch((err) => console.log(err));
// };

export const getPostLikes = async (postId) => {
  const ref = doc(firestore, likesRef, postId);

  await getDoc(ref)
    .then((result) => {
      const data = result.data();
      if (data) {
        const { likeCount, likedBy, owner } = data;
        return { likeCount, likedBy, owner };
      }
    })
    .catch((err) => console.log(err));
};

export const getFollowers = async (uid) => {
  const ref = doc(firestore, followersRef, uid);

  await getDoc(ref)
    .then((result) => {
      const data = result.data();
      if (data) {
        const { users } = data;
        return { users };
      }
    })
    .catch((err) => console.log(err));
};

export const getFollowing = async (uid) => {
  const ref = doc(firestore, followingRef, uid);

  await getDoc(ref)
    .then((result) => {
      const data = result.data();
      if (data) {
        const { users } = data;
        return { users };
      }
    })
    .catch((err) => console.log(err));
};
