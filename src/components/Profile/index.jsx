import BasicButton from "../BasicButton";
import AvatarImage from "../AvatarImage/index";
import ProfileGrid from "../ProfileGrid/index";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [postCount, setPostCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [bio, setBio] = useState("");

  useEffect(() => {
    setName("Kyle Leary");
    setBio("I'm the one that made this mess. Enjoy! 🔥");
    setPostCount(0);
    setFollowerCount(0);
    setFollowingCount(0);
  }, []);

  return (
    <>
      <div className="profile-container">
        <div className="profile-top-half">
          <AvatarImage />
          <div className="profile-stat-container">
            <div className="profile-stats">
              <StatContainer label="posts" value={postCount} />
              <StatContainer label="followers" value={followerCount} />
              <StatContainer label="following" value={followingCount} />
            </div>
            <BasicButton
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
          <h3 style={{ color: "#d9d9d9", marginBottom: "0.5rem" }}>{name}</h3>
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
