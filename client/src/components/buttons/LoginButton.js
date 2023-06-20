import { useAuth0 } from "@auth0/auth0-react";
import { login } from "../../axios/API";

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	const handleLogin = async () => {
		loginWithRedirect({
			scope: "read:users write:users",
		});
	};

	return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
