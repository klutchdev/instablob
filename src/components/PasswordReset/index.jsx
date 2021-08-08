import BasicButton from "../BasicButton";
import IconButton from "../IconButton";

const PasswordResetForm = () => {
  return (
    <form>
      <div>BIG ICON</div>
      <h3>Trouble logging in?</h3>
      <p>Enter your email, phone, or username and we'll sen.....</p>
      <input type="text" />
      <BasicButton />
      ------ or ------
      <IconButton />
      <br />
      <div>Back To Login</div>
    </form>
  );
};

export default PasswordResetForm;
