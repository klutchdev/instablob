import { AddCircle } from "../../icons/addCircle";
// import avatarImg from "../../img/avatarImg.png";
import { useAuthState } from "klutch-fire-hooks/auth";
import { auth } from "../../firebase/init";

const StoryTray = () => {
  const stories = [
    {
      id: 1,
      username: "dude_man_guy",
      url: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Blank&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray01&eyeType=Hearts&eyebrowType=Default&mouthType=Twinkle&skinColor=Black",
    },
    {
      id: 2,
      username: "lady_person",
      url: "https://i.picsum.photos/id/832/325/325.jpg?hmac=3xmaxj0yf1HY2C2LY-LW1IGMzykkAQC9H3QjxD7E-Ug",
    },
    {
      id: 3,
      username: "crazyCatLady",
      url: "https://i.pravatar.cc/325?img=48",
    },
    {
      id: 4,
      username: "madScience",
      url: "https://i.pravatar.cc/325?img=50",
    },
  ];

  return (
    <div className="story-tray-container">
      <AddStory key="1" />,
      {stories &&
        stories.map((story) => {
          return <Story key={story.id} imageUrl={story.url} username={story.username} />;
        })}
    </div>
  );
};

const AddStory = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="story-container" style={{ display: "flex", flexDirection: "column" }}>
      <img className="story-avatar" alt="" src={user.photoURL} />

      <AddCircle
        size="15"
        style={{
          position: "relative",
          top: -12,
          right: -12,
          margin: "0 auto",
          color: "#00bbff",
        }}
      />
      <p className="story-username" style={{ margin: 0, padding: 0 }}>
        your story
      </p>
    </div>
  );
};

const Story = ({ username, imageUrl }) => {
  return (
    <div className="story-container" style={{ display: "flex", flexDirection: "column" }}>
      <div className="story-avatar-outline">
        <img className="story-avatar" alt={username} src={imageUrl} />
      </div>
      <p className="story-username">{username}</p>
    </div>
  );
};

export default StoryTray;
