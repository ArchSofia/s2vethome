import React, {  useContext, useState } from "react";
import "../Navbar/Navbar.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const {isUserLogged} = useContext(UserContext)

	const goHome = () => {
		navigate("/");
	};

	return (
		<div className="navbar" id="home">
			<div className="welcome-info">
				<div className="logo-name">
					<h1 className="logo-title" onClick={goHome}>
						VET HOME
					</h1>
				</div>
				{
					isUserLogged ?
					<h4>{`Hola, ${sessionStorage.getItem("name")} ${sessionStorage.getItem("lastname")}`}</h4> : ""
				}
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
						{
							isUserLogged &&
							<button className='info-button'><Link to="/reservation">Reservar una cita</Link></button>
						}
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
