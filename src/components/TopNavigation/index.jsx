const TopNavigation = ({ leftIcon, title, rightIcon }) => {
  return (
    <nav className="top-navigation">
      <TopNavItem handleClick={() => {}} icon={leftIcon} />
      <TopNavTitle handleClick={() => {}} title={title} />
      <TopNavItem handleClick={() => {}} icon={rightIcon} />
    </nav>
  );
};

const TopNavItem = ({ icon, handleClick }) => {
  return (
    <div onClick={handleClick} className="top-navigation-item">
      {icon}
    </div>
  );
};

const TopNavTitle = ({ title, handleClick }) => {
  return (
    <h3 onClick={handleClick} className="top-navigation-title">
      {title}
    </h3>
  );
};

export default TopNavigation;
