import TopNavigation from "../../components/TopNavigation";
import { Close } from "../../icons/close";
import { RightArrow } from "../../icons/rightArrow";

const AddPostPage = () => (
  <>
    <TopNavigation
      title="New post"
      rightIcon={<RightArrow size="25" style={{ color: "#00bbff" }} />}
      leftIcon={<Close size="25" />}
      style={{ fontFamily: "Montserrat", fontSize: "125%" }}
    />
  </>
);

export default AddPostPage;
