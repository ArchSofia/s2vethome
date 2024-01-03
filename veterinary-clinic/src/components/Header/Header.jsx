import React, { useContext } from "react";
import "./Header.css";
import banner from "/assets/banner.png";
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
				<h1>
					Sabemos cuánto <br /> los querés
				</h1>
				<h3>
					Estamos comprometidos en proteger la salud de tu mascota en cada etapa
					de su vida
				</h3>
				{isUserLogged ? (
					<button className="logout-button" onClick={handleLogout}>
						Cerrar sesión
					</button>
				) : (
					<Link to="/login" className="header-button">
						Inicia sesión
					</Link>
				)}
				<h5>
					Si no tenes cuenta <br />
					<Link to="/register" style={{ textDecoration: "none" }}>
						Registrate aquí
					</Link>
				</h5>
			</div>
			{/* <div className="header-photos">
				<img src={banner} className="portrait" alt="photo" />
			</div> */}
		</div>
	);
};

export default Header;
