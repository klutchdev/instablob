const ProfileGrid = () => {
  // let items = [1, 2, 3, 4];
  const photoUrl = "https://via.placeholder.com/125/151718/cccccc%20";

  return (
    <div className="profile-grid-container">
      {/* <div className="profile-grid"> */}
      {/* {items &&
        items.map((item) => {
          return ( */}
      <ProfileGridItem key="1" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="2" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="3" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="4" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="11" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="22" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="33" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="44" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="111" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="222" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="333" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="444" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="1111" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="2222" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="3333" imageUrl={photoUrl} handleClick={() => {}} />
      <ProfileGridItem key="4444" imageUrl={photoUrl} handleClick={() => {}} />
      {/* );
        })} */}
      {/* </div> */}
    </div>
  );
};

const ProfileGridItem = ({ imageUrl, handleClick }) => {
  return (
    <div className="profile-grid-image-container" onClick={handleClick}>
      <img className="profile-grid-image" src={imageUrl} alt="" />
    </div>
  );
};

export default ProfileGrid;
