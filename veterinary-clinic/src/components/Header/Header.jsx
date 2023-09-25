import React from "react";
import "./Header.css";
import collie from "../../assets/photo-collie.png";

const Header = () => {
	return (
		<div className="ctn-header">
			<div className="header-text">
				<div className="job-title">
					<hr />
					<span> Clínica Veterinaria</span>
				</div>
				<h1>Tu familia es importante para nosotros</h1>
				<h3>Comprometidos con el bienestar de tus mascotas en cada etapa.</h3>

				<div className="logout-button">
					<a href="#contact">Contactanos</a>
				</div>
			</div>
			<div className="header-photos">
				<img src={collie} className="portrait" alt="photo" />
			</div>
		</div>
	);
};

export default Header;
