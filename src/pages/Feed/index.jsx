import Post from "../../components/Post";
import StoryTray from "../../components/StoryTray";
import TopNavigation from "../../components/TopNavigation";
import { Camera } from "../../icons/camera";

const Home = () => {
  return (
    <>
      <TopNavigation
        title="instaBlob"
        leftIcon={<Camera size="30" />}
        handleLeft={() => {}}
        style={{ fontFamily: "Grand Hotel", fontSize: "175%", fontWeight: "200" }}
      />
      <div className="content-wrapper">
        <StoryTray />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Home;
