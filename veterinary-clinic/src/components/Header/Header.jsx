import React, { useContext } from "react";
import "./Header.css";
import collie from "../../assets/photo-collie.png";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
	const { isUserLogged, setIsUserLogged, setUserLogged } =
		useContext(UserContext);

	const handleLogout = () => {
		sessionStorage.clear();
		setIsUserLogged(false);
		setUserLogged({});
	};

	return (
		<div className="ctn-header">
			<div className="header-text">
				<div className="job-title">
					<hr />
					<span> Clínica Veterinaria</span>
				</div>
				<h1>Tu familia es importante para nosotros</h1>
				<h3>Comprometidos con el bienestar de tus mascotas en cada etapa.</h3>
				{isUserLogged ? (
					<button className="logout-button" onClick={handleLogout}>
						Cerrar sesión
					</button>
				) : (
					<Link to="/login" className="header-button">
						Inicia sesión
					</Link>
				)}
				{/* <div className="logout-button">
					<a href="#contact">Contactanos</a>
				</div> */}
			</div>
			<div className="header-photos">
				<img src={collie} className="portrait" alt="photo" />
			</div>
		</div>
	);
};

export default Header;
