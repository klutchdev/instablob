const HomeGrid = () => {
  let items = [1, 2, 3, 4];

  return (
    <div className="home-grid-container">
      <div className="home-grid">
        {items &&
          items.map((item) => {
            return (
              <HomeGridItem key={item.id} imageUrl={item.url} handleClick={() => {}} />
            );
          })}
      </div>
    </div>
  );
};

const HomeGridItem = ({ handleClick }) => {
  return (
    <div className="home-grid-image-container" onClick={handleClick}>
      {/* <img className="home-grid-image" src={imageUrl} alt="" /> */}
    </div>
  );
};

export default HomeGrid;
