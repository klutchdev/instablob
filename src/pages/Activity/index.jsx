import TopNavigation from "../../components/TopNavigation";
import { LeftArrow } from "../../icons/leftArrow";

const ActivityPage = () => (
  <>
    <TopNavigation
      title="Activity"
      leftIcon={<LeftArrow size="30" />}
      handleLeft={() => {}}
      style={{ fontFamily: "Montserrat", fontSize: "125%" }}
    />
  </>
);

export default ActivityPage;
