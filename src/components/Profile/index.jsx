/* eslint-disable react-hooks/exhaustive-deps */
import BasicButton from "../BasicButton";
import AvatarImage from "../AvatarImage/index";
import ProfileGrid from "../ProfileGrid/index";
import { useEffect, useState } from "react";
import { getUserData } from "../../firebase/firestore";
import { useAuthState } from "klutch-fire-hooks/auth";
import { auth } from "../../firebase/init";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  const [bio, setBio] = useState("");
  const [usersName, setUsersName] = useState("");
  const [posts, setPosts] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    const unsub = getUserData(user.uid).then((result) => {
      const { name, bio, postCount, followerCount, followingCount } = result;
      setUsersName(name);
      setBio(bio);
      setPosts(postCount);
      setFollowers(followerCount);
      setFollowing(followingCount);
    });
    return () => unsub;
  }, []);

  return (
    <>
      <div className="profile-container">
        <div className="profile-top-half">
          <AvatarImage />
          <div className="profile-stat-container">
            <div className="profile-stats">
              <StatContainer label="posts" value={posts} />
              <StatContainer label="followers" value={followers} />
              <StatContainer label="following" value={following} />
            </div>
            <BasicButton
              type="button"
              bgColor="#1a1b1c"
              textColor="#d9d9d9"
              height="2.5rem"
              radius="2px"
              width="75%"
              label="Edit profile"
              fontWeight={600}
              fontSize="100%"
              margin="1rem auto auto 1.5rem"
            />
          </div>
        </div>
        <div className="profile-bottom-half">
          <h3 style={{ color: "#d9d9d9", marginBottom: "0.5rem" }}>{usersName}</h3>
          <small style={{ color: "#cccccc", marginBottom: "1rem" }}>{bio}</small>
        </div>
      </div>
      <ProfileGrid />
    </>
  );
};

const StatContainer = ({ label, value }) => {
  return (
    <div className="profile-stat">
      <h3 style={{ margin: "1rem auto 0 auto" }}>{value}</h3>
      <h5 style={{ margin: "0 auto" }}>{label}</h5>
    </div>
  );
};

export default UserProfile;

// export const ProfileTabBar = () => {
//   return (
//     <div className="profile-tab-bar-container">
//       <ProfileTabItem icon={<Grid size="20" />} />
//       <ProfileTabItem icon={<Burger size="20" />} />
//       <ProfileTabItem icon={<GeoPin size="20" />} />
//       <ProfileTabItem icon={<Tag size="20" />} />
//     </div>
//   );
// };

// const ProfileTabItem = ({ icon, handleClick }) => {
//   return (
//     <div onClick={handleClick} className="profile-tab-item">
//       {icon}
//     </div>
//   );
// };
