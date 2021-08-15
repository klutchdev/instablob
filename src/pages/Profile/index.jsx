import UserProfile from "../../components/Profile/index";
import TopNavigation from "../../components/TopNavigation";
// import { Lock } from "../../icons/lock";
import { Settings } from "../../icons/settings";
// import ProfileGrid from "../../components/ProfileGrid";
import { auth, logOut } from "../../firebase/init";
import { useAuthState } from "klutch-fire-hooks/auth";

const ProfilePage = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <TopNavigation
        title={user.displayName}
        leftIcon={<Settings size="20" />}
        rightIcon={<SignOut logOut={logOut} />}
        style={{ fontFamily: "Montserrat", fontSize: "125%" }}
      />
      <UserProfile />
    </>
  );
};

const SignOut = ({ logOut }) => {
  return (
    <span
      onClick={logOut}
      style={{
        margin: "auto 0.5rem auto auto",
        color: "#fa3b3b",
        textDecoration: "none",
        fontFamily: "Montserrat",
        fontSize: "75%",
      }}
    >
      Sign out
    </span>
  );
};

export default ProfilePage;
