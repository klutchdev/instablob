import UserProfile from "../../components/Profile/index";
import TopNavigation from "../../components/TopNavigation";
// import { Lock } from "../../icons/lock";
import { Settings } from "../../icons/settings";
// import ProfileGrid from "../../components/ProfileGrid";

const ProfilePage = () => (
  <>
    <TopNavigation
      title="Klutch"
      // rightIcon={<Lock size="20" />}
      leftIcon={<Settings size="25" />}
      style={{ fontFamily: "Montserrat", fontSize: "125%" }}
    />
    <UserProfile />
    {/* <ProfileGrid /> */}
  </>
);

export default ProfilePage;
