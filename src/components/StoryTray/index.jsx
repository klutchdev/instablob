import { AddCircle } from "../../icons/addCircle";
import avatarImg from "../../img/avatarImg.png";

const StoryTray = () => {
  // const stories = [
  //   <AddStory key="1" />,
  //   <Story key="2" />,
  //   <Story key="3" />,
  //   <Story key="4" />,
  //   <Story key="5" />,
  //   <Story key="6" />,
  // ];

  return (
    <div className="story-tray-container">
      {/* {stories &&
        stories.map((story) => {
          return <Story imageURL={story.url} username={story.username} />;
        })} */}
      <AddStory key="1" />,
      <Story username="user" key="2" />,
      <Story username="user" key="3" />,
      <Story username="user" key="4" />,
      <Story username="user" key="5" />,
      <Story username="user" key="6" />,
    </div>
  );
};

const AddStory = () => {
  return (
    <div className="story-container" style={{ display: "flex", flexDirection: "column" }}>
      {/* <div className="story-avatar-outline"> */}
      <img className="story-avatar" alt="" src={avatarImg} />
      {/* </div> */}

      {/* <span
        style={{
          position: "relative",
          padding: "1px",
          right: 24,
          bottom: -20,
          backgroundColor: "#090b0c",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddCircle
          size="20"
          style={{
            margin: "auto",
            color: "#00bbff",
          }}
        />
      </span> */}
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
        <img
          className="story-avatar"
          alt={username}
          src={imageUrl || "https://via.placeholder.com/150/333333/e9e9e9%20"}
        />
      </div>
      <p className="story-username">{username}</p>
    </div>
  );
};

export default StoryTray;
