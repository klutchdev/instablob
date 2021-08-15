// import Post from "../../components/Post";
import StoryTray from "../../components/StoryTray";
import TopNavigation from "../../components/TopNavigation";
import { Camera } from "../../icons/camera";
// import { auth } from "../../firebase/init";
// import { useAuthState } from "klutch-fire-hooks/auth";
import PostsFeed from "../../components/PostsFeed";
import { useHistory } from "react-router-dom";

const Home = () => {
  // const [user] = useAuthState(auth);
  const history = useHistory();
  return (
    <>
      <TopNavigation
        title="instaBlob"
        leftIcon={<Camera size="25" />}
        handleLeft={() => history.push("/")}
        handleTitle={() => history.push("/")}
        style={{ fontFamily: "Grand Hotel", fontSize: "175%", fontWeight: "200" }}
      />
      <div className="content-wrapper">
        <StoryTray />
        <PostsFeed />
      </div>
    </>
  );
};

export default Home;
