import BasicButton from "../BasicButton";
import IconButton from "../IconButton";

const SignUpForm = () => {
  return (
    <form>
      <span>LOGO</span>
      <h3>Sign up to see photos and videos from your friends.</h3>
      <IconButton />
      ------ or ------
      <input type="text" />
      <input type="password" />
      <input type="text" />
      <input type="password" />
      <BasicButton />
      <small>By signing up, you agree to our terms.</small>
      <small>Forgot password?</small>
    </form>
  );
};

export default SignUpForm;
