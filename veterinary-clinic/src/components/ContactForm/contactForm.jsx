import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

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
				"service_tjsgkgp",
				"template_snwx279",
				emailParams,
				"uEVk4n9-pqI3wEa2Q"
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
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={formData.name}
				onChange={handleChange}
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleChange}
				required
			/>
			<input
				type="tel"
				name="phone"
				placeholder="Phone"
				value={formData.phone}
				onChange={handleChange}
				required
			/>
			<textarea
				name="message"
				placeholder="Message"
				value={formData.message}
				onChange={handleChange}
				required
			/>
			<button type="submit">Send</button>
		</form>
	);
};

export default ContactForm;
