import BasicButton from "../BasicButton";
import AvatarImage from "../AvatarImage/index";
import { Grid } from "../../icons/grid";
import { Burger } from "../../icons/burger";
import { GeoPin } from "../../icons/geopin";
import { Tag } from "../../icons/tag";

const UserProfile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-top-half">
          <AvatarImage />
          <div className="profile-stat-container">
            <div className="profile-stats">
              <StatContainer label="posts" value="200" />
              <StatContainer label="followers" value="54.8k" />
              <StatContainer label="following" value="323" />
            </div>
            <BasicButton
              bgColor="#1a1b1c"
              textColor="#eeeeee"
              height="2.5rem"
              borderRadius="4px"
              width="80%"
              label="Edit profile"
              fontWeight={600}
              fontSize="100%"
              margin="1rem auto auto 1.5rem"
            />
          </div>
        </div>
        <div className="profile-bottom-half">
          <h3>Shreddy_Twerkury</h3>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos molestiae
            commodi. Minima architecto, consequuntur cupiditate aperiam exercitationem
            debitis, eligendi amet nisi eaque sunt beatae, nihil voluptas aliquid porro
            ratione.
          </small>
          {/* <a alt="" href="/">
            klutch-docs.netlify.app
          </a> */}
        </div>
        <ProfileTabBar />
      </div>
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
      <ProfileTabItem icon={<Grid />} />
      <ProfileTabItem icon={<Burger />} />
      <ProfileTabItem icon={<GeoPin />} />
      <ProfileTabItem icon={<Tag />} />
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
