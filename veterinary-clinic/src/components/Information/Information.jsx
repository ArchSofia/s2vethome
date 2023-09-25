import React from "react";
import "../Information/Information.css";
import veterinarian from "../../assets/veterinarian-photo.png";

const Information = () => {
	return (
		<div className="ctn-information" id="vets">
			<img className="info-vet-image" src={veterinarian} />
			<div className="info-description">
				<h1 className="text-parrafo">
					<div>
						Los mejores médicos veterinarios de todas las especialidades
					</div>
				</h1>
				<p className="text-parrafo-p">
					{" "}
					Todos los veterinarios son expertos en sus especialidades y graduados
					de las mejores universidades de veterinaria.<br></br> Nuestro staff
					experimentado trabaja en equipo para brindarle a su mascota la mejor
					atención posible.
				</p>
			</div>
		</div>
	);
};

export default Information;
