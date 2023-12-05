import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
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
	const [errorPets, setErrorPets] = useState(false);
	const [ageError, setAgeError] = useState("");
	const [nameError, setNameError] = useState(false);

	const goBack = () => {
		navigate(-1);
	};

	const inputPetsChange = (event) => {
		const { name, value } = event.target;
		if (name === "age") {
			const age = parseInt(value, 10);
			if (isNaN(age) || age < 0 || age > 25) {
				setAgeError(true);
			} else {
				setAgeError(false);
			}
		}
		if (name === "petName") {
			if (/^[A-Za-z]+$/.test(value) || value === "") {
				setNameError(false);
			} else {
				setNameError(true);
				return;
			}
		}
		setPet((prevPet) => ({
			...prevPet,
			[name]: value,
		}));
	};

	const savingPets = (event) => {
		event.preventDefault();
		if (
			pet.petName &&
			pet.age &&
			pet.gender !== "default" &&
			pet.petSpecies !== "default" &&
			ageError === false &&
			nameError === false
		) {
			setErrorPets(false);
			setAgeError(false);
			setNameError(false);
<<<<<<< HEAD
			/* setIncompleteInputError(false); */
=======
>>>>>>> 75d184892673efdca6aff81e31510f86f1a7e1d2
			setPetsArray([...petsArray, pet]);
		} else {
			setErrorPets(true);
		}
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
				.catch((error) => {
					setError(true);
					setErrorRegisterMsj(
						"Debes agregar al menos a 1 mascota para completar tu registro"
					);
				});
		} else {
			setError(true);
			setErrorRegisterMsj("Debes completar todos los campos del formulario");
		}
	};
	return (
		<>
			<Navbar />

			<div className="ctn-register">
				{error ? (
					<div className="error-message-div">
						<MdOutlineError className="error-icon" />
						<p>{errorRegisterMsj}</p>
					</div>
				) : (
					""
				)}

				<form className="form-register-ctn">
					<div className="form-register">
						<div className="user">
							<div>
								<h1 className="login-title">Registro </h1>
								<div className="section-form">
									<div className="register-name">
										<div class="input-field-5">
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
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</div>

										<div class="input-field-5">
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

										<div class="input-field-5">
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

										<div class="input-field-5">
											<div class="icon-3-1 icon-3">
												<img class="user-1" src="src/assets/phonecall.svg" />
												<div class="divider-1"></div>
											</div>
											<input
												class="full-name body-m"
												placeholder="Telefono"
												type="text"
												name="phone"
												required=""
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
											/>
										</div>

										<div class="input-field-5">
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
												type="text"
												name="address"
												required=""
												value={address}
												onChange={(e) => setAddress(e.target.value)}
											/>
										</div>

										<div class="input-field-5">
											<div class="icon-3-1 icon-3">
												<img class="user-1" src="src/assets/lock.svg" />
												<div class="divider-1"></div>
											</div>
											<input
												class="full-name body-m"
												placeholder="Contraseña"
												type="password"
												name="password"
												required=""
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="petssector">
							<div className="label">
								<p className="text-wrapper">Agregá los datos de tu mascota</p>
							</div>

							<div className="addedpetsector">
								{/* <div className="added-pet">
									{" "}
									Perrito
									<RiDeleteBin6Line />
								</div>
								<div className="added-pet">
									{" "}
									Perrito
									<RiDeleteBin6Line />
								</div>
								<div className="added-pet">
									{" "}
									Perrito
									<RiDeleteBin6Line />
								</div> */}

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
								{errorPets && (
									<div className="ctn-error-pets">
										<p className="text-error-pet">
											Para agregar a una mascota, todos los campos deben estar
											completos
										</p>
									</div>
								)}
								{ageError && (
									<div className="ctn-error-pets">
										<p className="text-error-pet">
											La edad de la mascota debe ser un número entre 0 y 25
										</p>
									</div>
								)}
								{nameError && (
									<p className="ctn-error-pets">
										El campo nombre solo debe contener letras
									</p>
								)}
							</div>

							<div className="primerfila">
								<div class="input-field-67">
									<input
										className={`input-pet ${nameError ? "errorName" : ""}`}
										type="text"
										name="petName"
										value={pet.petName}
										placeholder="Nombre"
										onChange={inputPetsChange}
									/>
								</div>
								<div class="input-field-67">
									<input
										className={`input-pet ${ageError ? "errorAge" : ""}`}
										type="number"
										min={1}
										max={25}
										name="age"
										value={pet.age}
										placeholder="Edad"
										onChange={inputPetsChange}
									></input>
									{ageError && (
										<p className="error-message-age">Número inválido</p>
									)}
								</div>
							</div>

							<div className="primerfila">
								<div className="register-pet-section primerfila">
									<select
										class="input-field-6"
										value={pet.gender}
										name="gender"
										onChange={inputPetsChange}
									>
										<option value="default">Sexo</option>
										<option>Macho</option>
										<option>Hembra</option>
										<option>Macho castrado</option>
										<option>Hembra castrada</option>
									</select>

									<select
										class="input-field-6"
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
						<button type="button" className="pets-button" onClick={savingPets}>
							Agregar mascota
						</button>

						<button
							className="login-button ingresar"
							onClick={handleRegisterUser}
						>
							Registrarme
						</button>
						<div className="reset-sign inicia">¿Ya tienes una cuenta?</div>
						<p>
							<br />
							<a
								style={{ textDecoration: "none", color: "#831742" }}
								href="/login"
							>
								Inicia sesión
							</a>
						</p>
						<div className="logo-name">
							<h1 className="logo-title logo-bottom">VET HOME</h1>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default Register;
