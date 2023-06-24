import { useAuth0 } from "@auth0/auth0-react";
import { login } from "../../axios/API";
import Button from "@mui/material/Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    loginWithRedirect({
      scope: "read:users write:users",
    });
  };

  return (
    <Button
      onClick={handleLogin}
      style={{ color: "white", textAlign: "center" }}
      sx={{
        display: "block",
      }}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
