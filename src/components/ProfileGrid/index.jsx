const ProfileGrid = () => {
  let items = [1, 2, 3, 4];

  return (
    <div className="home-grid-container">
      <div className="home-grid">
        {items &&
          items.map((item) => {
            return (
              <ProfileGridItem key={item.id} imageUrl={item.url} handleClick={() => {}} />
            );
          })}
      </div>
    </div>
  );
};

const ProfileGridItem = ({ imageUrl, handleClick }) => {
  return (
    <div className="home-grid-image-container" onClick={handleClick}>
      <img className="home-grid-image" src={imageUrl} alt="" />
    </div>
  );
};

export default ProfileGrid;
