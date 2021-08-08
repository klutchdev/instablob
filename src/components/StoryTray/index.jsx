const StoryTray = () => {
  const stories = [<Story />, <Story />, <Story />, <Story />, <Story />, <Story />];

  return (
    <div className="story-tray-container">
      {stories &&
        stories.map((story) => {
          return <Story key={story.id} imageURL={story.url} username={story.username} />;
        })}
    </div>
  );
};

const Story = ({ username }) => {
  return (
    <div className="story-container">
      <div className="story-avatar-outline">
        {/* <img className="story-avatar" alt={username} src={imageURL} /> */}
        <div className="story-avatar" />
      </div>
      <p className="story-username">{username}</p>
    </div>
  );
};

export default StoryTray;
