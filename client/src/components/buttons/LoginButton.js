import { useAuth0 } from "@auth0/auth0-react";
import { login } from "../../axios/API";
import { useEffect } from "react";

const LoginButton = () => {
	const { loginWithRedirect, getAccessTokenSilently } =
		useAuth0();

	useEffect(() => {
		getAccessTokenSilently().then((token) => login(token));
	}, [getAccessTokenSilently]);

	const handleLogin = async () => {
		loginWithRedirect({
			scope: "read:users write:users",
		});
	};

	return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
