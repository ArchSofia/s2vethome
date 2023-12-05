import React from "react";
import "../Services/Services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
<<<<<<< HEAD
	return (
		<div className="ctn-services" id="services">
			<div className="services-title">
				<h1>Brindamos un servicio veterinario integral</h1>
				{/* <span className="offer-text">
					Estamos a tu servicio con todo el equipo médico y personal que
					necesites
				</span> */}
			</div>
			<div className="ctn-services-info">
				<ServiceCard />
				<div className="card-pet-shop">
					<img src="/src/assets/petshop.png" alt="petshop" />
					<h2 className="card-title">Pet Shop</h2>
					<p className="card-description">
						Alimentos súper Premium, Farmacia veterinaria y todo lo que necesita
						tu mascota
					</p>
				</div>
			</div>
		</div>
	);
};
=======
  return (
    <div className='ctn-services' id='services'>
        <div className='services-title'>
            <h1>Brindamos un servicio veterinario integral</h1>
        </div>
        <div className='ctn-services-info'>
          <ServiceCard />
          <div className="card-pet-shop">
            <img src="/src/assets/petshop.png" alt="petshop" />
            <h2 className='card-title'>Pet Shop</h2>
            <p className='card-description'>Alimentos súper Premium, Farmacia veterinaria y todo lo que necesita tu mascota</p>
			    </div>
        </div>
      
    </div>
  )
}
>>>>>>> 75d184892673efdca6aff81e31510f86f1a7e1d2

export default Services;
