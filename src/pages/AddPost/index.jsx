import { useHistory } from "react-router-dom";
import TopNavigation from "../../components/TopNavigation";
import { Close } from "../../icons/close";
import { RightArrow } from "../../icons/rightArrow";

const AddPostPage = () => {
  const history = useHistory();
  return (
    <>
      <TopNavigation
        title="New post"
        rightIcon={<RightArrow size="25" style={{ color: "#00bbff" }} />}
        leftIcon={<Close size="20" />}
        handleLeft={() => history.push("/")}
        style={{ fontFamily: "Montserrat", fontSize: "125%" }}
      />
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          height: `100vh`,
          width: `100vw`,
        }}
      >
        <h1
          style={{
            margin: `auto`,
            fontWeight: 500,
            fontFamily: "Grand Hotel",
            fontSize: "200%",
            color: "#ff4eaf",
            transition: "all 400ms ease",
          }}
        >
          Add post coming soon!
        </h1>
      </div>
    </>
  );
};

export default AddPostPage;
