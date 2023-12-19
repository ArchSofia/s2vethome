import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const user = {
	name: "",
	lastName: "",
	address: "",
	contactNumber: "",
	email: "",
	password: "",
};

const dataUserLogged = {
	name: "",
	lastName: "",
	address: "",
	contactNumber: "",
	email: "",
};

export const UserProvider = ({ children }) => {
	const [dataUser, setDataUser] = useState(user);
	const [isUserLogged, setIsUserLogged] = useState(
		sessionStorage.getItem("isUserLogged")
	);
	const [userLogged, setUserLogged] = useState(dataUserLogged);

	const findUserByEmail = (email) => {
		axios
			.get(`http://vethomeback.azurewebsites.net/customer/findByEmail/${email}`)
			.then((response) => {
				setUserLogged(response.data);
				sessionStorage.setItem("name", response.data.name);
				sessionStorage.setItem("lastname", response.data.lastName);
			});
	};

	return (
		<UserContext.Provider
			value={{
				dataUser,
				setDataUser,
				isUserLogged,
				setIsUserLogged,
				userLogged,
				setUserLogged,
				findUserByEmail,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
