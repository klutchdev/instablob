import BasicButton from "../BasicButton";
import IconButton from "../IconButton";

const SignInForm = () => {
  return (
    <form>
      <span>LOGO</span>
      <input type="text" />
      <input type="password" />
      <BasicButton />
      ------ or ------
      <IconButton />
      <small>Forgot password?</small>
    </form>
  );
};

export default SignInForm;
