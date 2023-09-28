import React from "react";
import "../Blog/Blog.css";
// import form from "../../assets//FORM.png";
import { useState } from "react";
// import linkmail from "/Users/sofiadiazvaldez/Documents/PROJECTS/vethome/vethome/veterinary-clinic/src/assets/24/symbols/at-sign.png";
// import linkinsta from "/Users/sofiadiazvaldez/Documents/PROJECTS/vethome/vethome/veterinary-clinic/src/assets/24/symbols/instagram.png";
import emailjs from "@emailjs/browser";
// import botonform from "/Users/sofiadiazvaldez/Documents/PROJECTS/vethome/vethome/veterinary-clinic/src/assets/botonform.png";
const Blog = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	console.log("formData:", formData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailParams = {
			from_name: formData.name,
			from_email: formData.email,
			phone: formData.phone,
			message: formData.message,
		};

		emailjs
			.send(
				"service_lexxqx5",
				"template_kooy0wx",
				emailParams,
				"c7tBtIo6MVCXOcHun"
			)
			.then(
				(response) => {
					console.log("Email sent successfully:", response);
					alert("Form submitted successfully!");
				},
				(error) => {
					console.error("Error sending email:", error);
					alert("Form submission failed. Please try again later.");
				}
			);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="contact-form-1" id="contacto">
				<div className="contact-form-3">
					<div className="header-form">
						<div className="headline-subhead-5">
							<div className="comunicate-con-nosotros-1">
								Comunicate con Nosotros
							</div>
							<p className="tenes-alguna-duda-s-1 body-m">
								¿Tenes alguna duda sobre nuestros servicios? Nuestro equipo está
								disponible para ayudarte.
							</p>
						</div>
					</div>
					<div className="caja-sectores-1-y-2">
						<div className="sector-1-contacto">
							<div class="sector-1-contacto-a">
								<div class="sector-1-contacto-a-telefono">
									<img class="icono-telefono" src="src/assets/phonecall.svg" />
									<div class="text-5-1">+012 345 6789</div>
								</div>
								<div class="sector-1-contacto-a-email">
									<img
										class="icono-email"
										src="src/assets/envelopesimple-1.svg"
									/>
									<div class="text-5-2">info@vethome.com.ar</div>
								</div>
							</div>
							<div class="sector-1-contacto-b">
								<div class="conectate-con-nosotros">Conectate con nosotros</div>
								<div class="social-links-1">
									<a
										href="https://www.instagram.com/vethome.pilar/"
										target="_blank"
									>
										<img
											class="social-icons-1"
											src="src/assets/social-icons.svg"
										/>
									</a>
								</div>
							</div>
						</div>

						<div className="sector-2-input">
							<div class="input-fields-button">
								<div class="input-fields">
									<div class="input-field-2">
										<div class="icon-3-1 ">
											<img class="user-1" src="src/assets/user-1.svg" />
											<div class="divider-1"></div>
										</div>
										<input
											// class="full-name body-m"
											name="name"
											placeholder="Nombre Completo"
											type="text"
											required
											value={formData.name}
											onChange={handleChange}
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
											placeholder="Email"
											type="email"
											name="email"
											required
											value={formData.email}
											onChange={handleChange}
										/>
									</div>
									<div class="input-field-2">
										<div class="icon-3-1 icon-3">
											<img class="send" src="src/assets/phonecall.svg" />
											<div class="divider-1"></div>
										</div>
										<input
											class="full-name body-m"
											placeholder="Teléfono"
											type="text"
											name="phone"
											required
											value={formData.phone}
											onChange={handleChange}
										/>
									</div>
									<div class="input-field-4">
										<div class="icon-3-1 icon-3">
											<img class="send" src="src/assets/send1.png" />
											<div class="divider-1"></div>
										</div>
										<textarea
											class="mensaje-1 body-m"
											placeholder="Mensaje"
											type="text"
											required
											value={formData.message}
											onChange={handleChange}
											name="message"
										></textarea>
									</div>
								</div>
								<button class="button-4" type="submit">
									<div class="label-3 poppins-semi-bold-white-16px">Enviar</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Blog;
