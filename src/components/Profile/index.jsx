import BasicButton from "../BasicButton";
import AvatarImage from "../AvatarImage/index";
import { Grid } from "../../icons/grid";
import { Burger } from "../../icons/burger";
import { GeoPin } from "../../icons/geopin";
import { Tag } from "../../icons/tag";
import ProfileGrid from "../ProfileGrid/index";

const UserProfile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-top-half">
          <AvatarImage />
          <div className="profile-stat-container">
            <div className="profile-stats">
              <StatContainer label="posts" value="1" />
              <StatContainer label="followers" value="0" />
              <StatContainer label="following" value="0" />
            </div>
            <BasicButton
              bgColor="#1a1b1c"
              textColor="#d9d9d9"
              height="2.5rem"
              radius="3px"
              width="80%"
              label="Edit profile"
              fontWeight={600}
              fontSize="100%"
              margin="1rem auto auto 1.5rem"
            />
          </div>
        </div>
        <div className="profile-bottom-half">
          <h3 style={{ color: "#d9d9d9", marginBottom: "0.5rem" }}>Kyle Leary</h3>
          <small style={{ color: "#cccccc", marginBottom: "1rem" }}>
            This is my profile, hope you enjoy! 🔥
          </small>
          {/* <a alt="" href="/">
            klutch-docs.netlify.app
          </a> */}
        </div>
        {/* <ProfileTabBar /> */}
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

export const ProfileTabBar = () => {
  return (
    <div className="profile-tab-bar-container">
      <ProfileTabItem icon={<Grid size="20" />} />
      <ProfileTabItem icon={<Burger size="20" />} />
      <ProfileTabItem icon={<GeoPin size="20" />} />
      <ProfileTabItem icon={<Tag size="20" />} />
    </div>
  );
};

const ProfileTabItem = ({ icon, handleClick }) => {
  return (
    <div onClick={handleClick} className="profile-tab-item">
      {icon}
    </div>
  );
};

export default UserProfile;
