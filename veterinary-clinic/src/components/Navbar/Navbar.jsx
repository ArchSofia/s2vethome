import React, {  useState } from "react";
import "../Navbar/Navbar.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const goHome = () => {
		navigate("/");
	};

	return (
		<div className="navbar" id="home">
			<div className="welcome-info">
				{/* <div className="logo">
					{ FIXME - Reemplazar por logo prolijo }
					<img src="./public/logo.png"></img>
				</div> */}
				<div className="logo-name">
					{/* <h4>Clinica veterinaria</h4> */}
					<h1 className="logo-title" onClick={goHome}>
						VET HOME
					</h1>
				</div>
			</div>
			<div className="icon-bars" onClick={() => setSidebarOpen(true)}>
				<FaBars />
			</div>
			<div
				className={`sidebar ${sidebarOpen ? "open" : "desktop-version-menu"}`}
			>
				<div className="icon-close" onClick={() => setSidebarOpen(false)}>
					<IoMdClose />
				</div>
				<ul className={sidebarOpen ? "sidebar-list" : "menu-list"}>
					{/* TODO - click on home te sube a inicio de la página */}
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#services">Servicios</a>
					</li>
					<li>
						<a href="#vets">Veterinarios</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Contacto</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
