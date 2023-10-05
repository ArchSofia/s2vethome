import React, {useState} from 'react'
import '../Reservation/Reservation.css'
import Navbar from '../../components/Navbar/Navbar'
import { useRef } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {setHours, setMinutes, addDays} from 'date-fns';
import { format } from 'date-fns';


const Reservation = () => {
    const form = useRef();
  return (
    <>
       <Navbar />
        <div className='ctn-booking'>
            {/* <img src={catImage} className='booking-img'></img> */}
            <div className='form-data-ctn'>
           
            <form className='booking-form' ref={form}>
                <div className='form-title'>
                   <h1 className='title-booking-form'>Reserva de turno</h1> 
                </div>
                <div className='booking-info-customer'>
                    <h3>Tus datos</h3>
                    <div className='customer-names'>
                        <input className='book-input' 
                            type='text' 
                            // value={userLogged?.name}
                            placeholder='Nombre'
                            >
                            </input>
                            <input className='book-input' 
                            type='text' 
                            // value={userLogged?.lastName}
                            placeholder='Apellido'
                            >
                        </input>
                    </div>
                    <div className='customer-data'>
                        <input className='book-input' 
                            type='text' 
                            // value={userLogged?.email}
                            placeholder='email'
                            >
                            </input>
                            <input className='book-input' 
                            type='number' 
                            // value={userLogged?.contactNumber}
                            placeholder='Número'
                            >
                        </input>
                    </div>
                    <div className='customer-address'>
                        <input className='book-input-address' 
                            type='text' 
                            // value={userLogged?.address}
                            placeholder='Dirección'
                            >
                        </input>
                    </div>
                </div>
                <div className='booking-info'>
                    <h3>Datos de la consulta</h3>
                    <DatePicker
                        // value={selectedDate}
                        // selected={selectedDate}
                        // onChange={handleDateChange}
                        // excludeTimes={excludeTimesForSelectedDate} 
                        format="yyyy-MM-dd'T'HH:mm:ss.SSSxxx" 
                        timeIntervals={30}
                        timeCaption="Hora"
                        placeholderText="Selecciona una fecha y hora"
                        showTimeSelect
                        timeFormat="p"
                        dateFormat="Pp"
                        // minDate={addDays(new Date(), 1)}
                        minTime={setHours(setMinutes(new Date(), 30), 9)}
                        maxTime={setHours(setMinutes(new Date(), 30), 20)}
                    /> 
                    <select defaultValue={1} className='select-booking' 
                    // onChange={e => handleInputChange('dataMascota', 'id', e.target.value)}
                    >
                    <option value={1} disabled>Selecciona tu mascota</option>
                    {/* {
                        userLogged.pets && (
                        userLogged.pets.map(p => {
                            return <option key={p.id} value={p.id}>{p.petName}</option>
                        })
                        )
                    } */}
                    </select>
                    <textarea className='b-description' 
                    // value={state.initialState?.dataConsulta?.motivoConsulta} 
                    placeholder='Describa el motivo de consulta'
                    // onChange={e => handleInputChange('dataConsulta', 'motivoConsulta', e.target.value)}
                    >
                    </textarea>
                </div>
                <div className='button-logo'>
                    <button className='booking-btn' >Reservar</button>
                    <h1 className='logo-form'>VET HOME</h1>
                </div>
               
            </form>
            
            </div>
        </div>
    </>
  )
}

export default Reservation
