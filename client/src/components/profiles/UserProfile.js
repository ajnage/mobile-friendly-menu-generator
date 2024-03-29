import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	} else console.log(user);

	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
			</div>
		)
	);
};

export default UserProfile;
