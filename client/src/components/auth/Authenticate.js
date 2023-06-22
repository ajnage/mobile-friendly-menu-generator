import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { login } from "../../axios/API";

export const Authenticate = () => {
	const { isAuthenticated, getAccessTokenSilently } = useAuth0();

	const authenticate = async () => {
		const token = await getAccessTokenSilently();
		await login(token);
	};

	useEffect(() => {
		isAuthenticated && authenticate();
	}, [isAuthenticated]);

	return null;
};

export default Authenticate;
