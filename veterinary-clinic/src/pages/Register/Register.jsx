import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import Footer from "../../components/Footer/Footer";

const Register = () => {
	const navigate = useNavigate();
	const { setDataUser } = useContext(UserContext);

	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState();

	const [pet, setPet] = useState({
		petName: "",
		age: "",
		gender: "",
		petSpecies: "",
	});

	let [petsArray, setPetsArray] = useState([]);

	const [error, setError] = useState(false);
	const [errorRegisterMsj, setErrorRegisterMsj] = useState("");

	const goBack = () => {
		navigate(-1);
	};

	const inputPetsChange = (event) => {
		const { name, value } = event.target;
		setPet((prevPet) => ({
			...prevPet,
			[name]: value,
		}));
	};

	const savingPets = (event) => {
		event.preventDefault();
		setPetsArray([...petsArray, pet]);
		setPet({ petName: "", age: "", gender: "default", petSpecies: "default" });
	};

	const deletePet = (index) => {
		let newPetsArray = petsArray.filter((_, i) => i !== index);
		setPetsArray(newPetsArray);
	};

	const handleRegisterUser = (e) => {
		e.preventDefault();
		if (name && lastname && address && phone && email && password) {
			setError(false);
			axios
				.post("http://localhost:8080/customer/addCustomer", {
					name: name,
					lastName: lastname,
					address: address,
					contactNumber: Number(phone),
					email: email,
					password: password,
					pets: petsArray,
				})
				.then((response) => {
					console.log("respuesta:", response);
					if (response.status === 200 || response.status === 201) {
						setDataUser(response.config.data);
						setName("");
						setLastname("");
						setAddress("");
						setPhone("");
						setEmail("");
						setPassword("");
						goBack();
					}
				})
				.catch((error) => console.log(error));
		} else {
			setError(true);
			setErrorRegisterMsj("Debes completar todos los campos del formulario");
		}
	};
	return (
		<>
			<Navbar />
			{/* <div className="icon-direction">
				<IoMdArrowRoundBack className="arrow" onClick={goBack} />
			</div> */}
			<div className="ctn-register">
				{error ? (
					<div className="error-message-div">
						<MdOutlineError className="error-icon" />
						<p>{errorRegisterMsj}</p>
					</div>
				) : (
					""
				)}
				{/* <h1 className="register-title">Crea tu cuenta</h1>
				<p className="register-description-title">
					Completa un sencillo formulario, agrega a todas tus mascotas y
					adéntrate en un mundo de amor en nuestra comunidad ♥
				</p> */}
				<form>
					<div className="box-user-pets">
						<div className="user">
							<div className="form-register">
								<h1 className="login-title">Registro </h1>
								<div className="section-form">
									<div className="register-name">
										<div class="input-field-2">
											<div class="icon-3-1 icon-3">
												<img
													class="user-1"
													src="src/assets/envelopesimple-1.svg"
												/>
												<div class="divider-1"></div>
											</div>
											<input
												class="full-name body-m"
												placeholder="Email"
												type="email"
												name="email"
												required=""
												value=""
											/>
										</div>

										<div class="input-field-2">
											<div class="icon-3-1 icon-3">
												<img class="user-1" src="src/assets/user-1.svg" />
												<div class="divider-1"></div>
											</div>
											<input
												class="full-name body-m"
												placeholder="Nombre"
												type="text"
												name="name"
												required
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
										</div>

										<div class="input-field-2">
											<div class="icon-3-1 icon-3">
												<img class="user-1" src="src/assets/user-1.svg" />
												<div class="divider-1"></div>
											</div>
											<input
												class="full-name body-m"
												placeholder="Apellido"
												type="text"
												name="lastname"
												required=""
												value={lastname}
												onChange={(e) => setLastname(e.target.value)}
											/>
										</div>

										<div class="input-field-2">
											<div class="icon-3-1 icon-3">
												<img class="user-1" src="src/assets/phonecall.svg" />
												<div class="divider-1"></div>
											</div>
											<input
												class="full-name body-m"
												placeholder="Telefono"
												type="telefono"
												name="telefono"
												required=""
												value=""
											/>
										</div>

										<div class="input-field-2">
											<div class="icon-3-1 icon-3">
												<img
													class="user-1"
													src="src/assets/envelopesimple-1.svg"
												/>
												<div class="divider-1"></div>
											</div>
											<input
												class="full-name body-m"
												placeholder="Direccion"
												type="direccion"
												name="direccion"
												required=""
												value=""
											/>
										</div>

										<div class="input-field-2">
											<div class="icon-3-1 icon-3">
												<img class="user-1" src="src/assets/lock.svg" />
												<div class="divider-1"></div>
											</div>
											<input
												class="full-name body-m"
												placeholder="Contraseña"
												type="contraseña"
												name="contraseña"
												required=""
												value=""
											/>
										</div>
									</div>
								</div>
								<div className="section-form">
									<div className="register-address">
										<input
											className="input-register-address"
											type="text"
											name="address"
											value={address}
											placeholder="Direccion"
											onChange={(e) => setAddress(e.target.value)}
											required
										></input>
									</div>
									<div className="register-phone">
										<input
											className="input-register-phone"
											type="text"
											name="phone"
											value={phone}
											placeholder="telefono"
											onChange={(e) => setPhone(e.target.value)}
											required
										></input>
									</div>
								</div>
								<div className="section-form">
									<div className="register-email">
										<input
											type="email"
											className="input-register-email"
											name="email"
											value={email}
											placeholder="Correo electrónico"
											onChange={(e) => setEmail(e.target.value)}
											required
										></input>
									</div>
									<div className="register-passcode">
										<input
											type="password"
											className="input-register-passcode"
											name="password"
											value={password}
											placeholder="Contraseña"
											onChange={(e) => setPassword(e.target.value)}
											required
										></input>
									</div>
								</div>
							</div>
						</div>
						<div className="pets">
							{/* <h2>Agrega los datos de tu mascota</h2> */}
							{/* <div className="form-register">
								<div className="petsArray">
									{petsArray &&
										petsArray.map((p, index) => {
											return (
												<div key={index} className="added-pet">
													{p.petName}
													<RiDeleteBin6Line
														className="delete-pet"
														onClick={() => deletePet(index)}
													/>
												</div>
											);
										})}
								</div>

								<article>
									<div className="ctn-pet">
										<div className="section-form-pets">
											<div className="register-pet-section">
												<input
													className="input-pet"
													type="text"
													name="petName"
													value={pet.petName}
													placeholder="Nombre"
													onChange={inputPetsChange}
												></input>
											</div>
											<div className="register-pet-section">
												<input
													className="input-pet"
													type="number"
													name="age"
													value={pet.age}
													placeholder="Edad"
													onChange={inputPetsChange}
												></input>
											</div>
										</div>
										<div className="section-form-pets">
											<div className="register-pet-section">
												<select
													value={pet.gender}
													name="gender"
													onChange={inputPetsChange}
												>
													<option value="default">Género</option>
													<option>Masculino</option>
													<option>Femenino</option>
												</select>
											</div>
											<div className="register-pet-section">
												<select
													value={pet.petSpecies}
													name="petSpecies"
													onChange={inputPetsChange}
												>
													<option value="default">Especie</option>
													<option>Canino</option>
													<option>Felino</option>
												</select>
											</div>
										</div>
									</div>
									<button
										type="button"
										className="pets-button"
										onClick={savingPets}
									>
										Agregar
									</button>
								</article>
							</div> */}
						</div>
					</div>
					<button className="register-button" onClick={handleRegisterUser}>
						Crear cuenta
					</button>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default Register;
