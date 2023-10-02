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

			<div className="ctn-register">
				{error ? (
					<div className="error-message-div">
						<MdOutlineError className="error-icon" />
						<p>{errorRegisterMsj}</p>
					</div>
				) : (
					""
				)}

				<form>
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

							<div className="primerfila">
								<div class="input-field-6">
									<input
										className="input-pet"
										type="text"
										name="petName"
										value={pet.petName}
										placeholder="Nombre"
										onChange={inputPetsChange}
									/>
								</div>

								<div class="input-field-6">
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

							<div className="primerfila">
								<div className="register-pet-section">
									<select
										class="input-field-6"
										value={pet.gender}
										name="gender"
										onChange={inputPetsChange}
									>
										<option value="default">Género</option>
										<option>Masculino</option>
										<option>Femenino</option>
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
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default Register;
