import React from 'react'
import '../Services/Services.css'
import ServiceCard from './ServiceCard'


const Services = () => {
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

export default Services
