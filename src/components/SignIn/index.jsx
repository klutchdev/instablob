import IconButton from "../IconButton";
import { Google } from "../../icons/google";
import { googleSignIn } from "../../firebase/init";

const SignInForm = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in">
        <h1 className="sign-in-logo">🔥instaBlob</h1>
        <h3 className="sign-in-description">
          Learn how to use the new v9 beta Firebase tree-shakeable SDK with React/Js and
          CSS by building a mini instagram clone using auth, firestore, storage, and cloud
          functions
        </h3>
        <IconButton
          type="button"
          onClick={googleSignIn}
          icon={<Google size="25" />}
          label="Sign in"
          width="50vw"
          height="2.5rem"
          radius="2px"
          bgColor="linear-gradient(45deg, #ffa200, #ff32e0)"
        />
      </div>
    </div>
  );
};

export default SignInForm;
