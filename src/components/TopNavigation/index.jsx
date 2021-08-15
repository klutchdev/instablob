const TopNavigation = ({
  leftIcon,
  title,
  rightIcon,
  style,
  handleLeft,
  handleRight,
  handleTitle,
}) => {
  return (
    <nav className="top-navigation" style={style}>
      <TopNavItem handleClick={handleLeft} icon={leftIcon} />
      <TopNavTitle handleClick={handleTitle} title={title} />
      <TopNavItem handleClick={handleRight} icon={rightIcon} />
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
