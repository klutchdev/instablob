import { HouseActive } from "../../icons/home";
import { Search } from "../../icons/Search";
import { Plus } from "../../icons/plus";
import { Heart } from "../../icons/heart";
import { UserCircle } from "../../icons/userCircle";

const BottomNavigation = () => {
  return (
    <nav className="bottom-navigation">
      <BottomNavItem icon={<HouseActive size="30" />} path="/" />
      <BottomNavItem icon={<Search size="30" />} path="/" />
      <BottomNavItem icon={<Plus size="30" />} path="/" />
      <BottomNavItem icon={<Heart size="30" />} path="/" />
      <BottomNavItem icon={<UserCircle size="30" />} path="/profile" />
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

export default BottomNavigation;
