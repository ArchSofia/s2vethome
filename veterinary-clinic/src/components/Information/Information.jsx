import React from "react";
import "../Information/Information.css";
import veterinarian from "../../assets/guada.jpg";

const Information = () => {
	return (
		<div className="ctn-information" id="vets">
			<img className="info-vet-image" src={veterinarian} />
			<div className="info-description">
				<h1 className="text-parrafo">
					<div>Nuestra misión</div>
				</h1>
				<p className="text-parrafo-p">
					{" "}
					Somos una clínica veterinaria que brinda un servicio veterinario
					integral, como así también productos para mascotas en la localidad de
					Pilar, integrada por un equipo de profesionales en constante
					formación, con el objetivo de brindar un servicio de excelencia y
					tecnología de diagnóstico aplicada. <br />
					Nuestra norte es trabajar bajo una premisa: el trato humanitario hacia
					nuestros pacientes, generando y transfiriendo valor hacia los tutores
					de mascotas.
				</p>
			</div>
		</div>
	);
};

export default Information;
