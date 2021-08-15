import { HouseActive } from "../../icons/home";
import { Search } from "../../icons/Search";
import { Plus } from "../../icons/plus";
import { Heart } from "../../icons/heart";
import avatarImg from "../../img/avatarImg.png";

// import { UserCircle } from "../../icons/userCircle";
// import AvatarImage from "../AvatarImage";

const BottomNavigation = () => {
  return (
    <nav className="bottom-navigation">
      <BottomNavItem icon={<HouseActive size="25" />} path="/" />
      <BottomNavItem icon={<Search size="25" />} path="/search" />
      <BottomNavItem icon={<Plus size="30" />} path="/add-post" />
      <BottomNavItem icon={<Heart size="25" />} path="/activity" />
      {/* {user ? ( */}
      <BottomNavAvatar avatarImg={avatarImg} path="/profile" />
      {/* ) : (
        <BottomNavItem icon={<UserCircle size="25" />} path="/profile" />
      )} */}
    </nav>
  );
};

const BottomNavItem = ({ icon, path }) => {
  return (
    <a href={path} className="bottom-navigation-item">
      {icon}
    </a>
  );
};

const BottomNavAvatar = ({ path, avatarImg }) => {
  return (
    <a href={path} className="bottom-navigation-item">
      <img
        style={{
          margin: "0 auto 0 auto",
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          boxShadow: "1px 1px 12px #030303aa",
        }}
        // src={user.photoURL || avatarImg}
        src={avatarImg}
        alt=""
      />
    </a>
  );
};

export default BottomNavigation;
