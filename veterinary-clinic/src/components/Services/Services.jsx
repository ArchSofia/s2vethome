import React from 'react'
import '../Services/Services.css'
import ServiceCard from './ServiceCard'


const Services = () => {
  return (
    <div className='ctn-services' id='services'>
        <div className='services-title'>
            <h1>¿Qué servicios ofrecemos?</h1>
            <span className='offer-text'>Estamos a tu servicio con todo el equipo médico y personal que necesites</span>
        </div>
        <div className='ctn-services-info'>
          <ServiceCard />
          <div className="card-pet-shop">
            <img src="/src/assets/petshop.png" alt="petshop" />
            <h2 className='card-title'>Pet Shop</h2>
            <p className='card-description'>Alimentos, accesorios y medicación para tus mascotass</p>
			    </div>
        </div>
      
    </div>
  )
}

export default Services
