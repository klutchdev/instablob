import { useHistory } from "react-router-dom";
import TopNavigation from "../../components/TopNavigation";
import { LeftArrow } from "../../icons/leftArrow";

const ActivityPage = () => {
  const history = useHistory();
  return (
    <>
      <TopNavigation
        title="Activity"
        leftIcon={<LeftArrow size="25" />}
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
          Activity coming soon!
        </h1>
      </div>
    </>
  );
};

export default ActivityPage;
