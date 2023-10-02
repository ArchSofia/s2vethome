import React from "react";

const Reg = () => {
	return (
		<div>
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
							</div>
                            
                            
                            
                            <button className="register-button" onClick={handleRegisterUser}>
						Crear cuenta
					</button>
                    */}
			</div>
		</div>
	);
};

export default Reg;
