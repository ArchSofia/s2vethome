import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { UserProvider } from "../context/UserContext";
import Reservation from "../pages/Reservation/Reservation";

const AppRoutes = () => {
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/reservation" element={<Reservation />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
};

export default AppRoutes;
