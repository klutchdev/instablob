const ProfileGrid = () => {
  let photos = [
    "https://picsum.photos/120?random=0",
    "https://picsum.photos/120?random=1",
    "https://picsum.photos/120?random=2",
    "https://picsum.photos/120?random=3",
    "https://picsum.photos/120?random=4",
    "https://picsum.photos/120?random=5",
    "https://picsum.photos/120?random=6",
    "https://picsum.photos/120?random=7",
    "https://picsum.photos/120?random=8",
    "https://picsum.photos/120?random=9",
    "https://picsum.photos/120?random=10",
    "https://picsum.photos/120?random=11",
    "https://picsum.photos/120?random=12",
    "https://picsum.photos/120?random=13",
  ];

  return (
    <div className="profile-grid-container">
      {photos &&
        photos.map((item) => {
          return <ProfileGridItem key={item} imageUrl={item} handleClick={() => {}} />;
        })}
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

/* <ProfileGridItem key="2" imageUrl={photoUrl} handleClick={() => {}} />
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
      <ProfileGridItem key="4444" imageUrl={photoUrl} handleClick={() => {}} /> */
