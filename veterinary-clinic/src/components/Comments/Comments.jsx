import React from "react";
import "../Comments/Comments.css";
import ModalComments from "./ModalComments";

const Comments = () => {
	return (
		<>
			<div className="ctn-comments" id="about">
				<h1 className="comments-title">Qué dicen nuestros pacientes</h1>
				<p className="comments-description">
					Mira el impacto que nuestros servicios veterinarios generan
				</p>
			</div>
			<div className="comments-card-section">
				<ModalComments />
			</div>
		</>
	);
};

export default Comments;
