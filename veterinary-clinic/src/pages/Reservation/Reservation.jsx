import React, {useState, useContext, useEffect, useRef, useReducer} from 'react'
import '../Reservation/Reservation.css'
import Swal from 'sweetalert2';
import { UserContext } from '../../context/UserContext'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {setHours, setMinutes, addDays} from 'date-fns';
import { format } from 'date-fns';
import axios from 'axios'


const Reservation = () => {
    const { userLogged } = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [vetList, setVetList] = useState([])
    const [vetId, setVetId] = useState(null)
    const [reservationCreated, setReservationCreated] = useState(false);
  
    const form = useRef();
  
    const initialState = {
      dataConsulta: {
        fecha: '',
        nombreVeterinario: '',
        motivoConsulta: ''
      },
      dataPropietario: {
        nombre: userLogged.name,
        apellido: userLogged.lastName,
        email: userLogged.email,
        numero: userLogged.contactNumber,
        direccion: userLogged.address
      },
      dataMascota: {
        id: ""
      }
    }
  
    const formBookingReducer = (state, action) => {
      switch (action.type) {
        case 'UPDATE_FIELD':
          const newValue = action.field === 'fecha' && action.value instanceof Date ? action.value.toISOString() : action.value;
          return {
            ...state,
            [action.section]: {
              ...state[action.section],
              [action.field]: newValue
            }
          };
        case 'RESET_FORM':
          return initialState; 
        default:
          return state;
      }
    };
  
     const [state, dispatch] = useReducer(formBookingReducer, initialState);
  
    const handleInputChange = (section, field, value) => {
      dispatch({
        type: 'UPDATE_FIELD',
        section,
        field,
        value
      });
    }
  
    const handleDateChange = (date) => {
      const formattedDate = format(date, "yyyy-MM-dd'T'HH:mm:ss");
      setSelectedDate(date);
      handleInputChange('dataConsulta', 'fecha', formattedDate);
      console.log(formattedDate)
    };
  
    const token = sessionStorage.getItem('token');
  
    const config = {
      headers: {
        Authorization: 'Bearer ' + token 
      }
    };
    
    const requestData = {
      appointmentDateTime: state.dataConsulta.fecha,
      appointmentReason: state.dataConsulta.motivoConsulta,
      customerId: userLogged.id,
      vetId: Number(vetId),
      petIds: [state.dataMascota.id]    
    }
  
  
    const [occupiedTimes, setOccupiedTimes] = useState([]);
  
    useEffect(() => {
      if (vetId) {
        fetchReservationData(vetId);
      }
    }, [vetId, reservationCreated]);
  
  
    useEffect(() => {
      const filteredTimes = occupiedTimes.filter(time => {
        return (
          time.getDate() === selectedDate.getDate() &&
          time.getMonth() === selectedDate.getMonth() &&
          time.getFullYear() === selectedDate.getFullYear()
        );
      });
      setExcludeTimesForSelectedDate(filteredTimes);
    }, [selectedDate, occupiedTimes]);
  
  
    const fetchReservationData = (idVet) => {
      if (idVet) {
        axios.get(`http://localhost:8080/vet/getOccupiedTime/${idVet}`)
          .then(response => {
            const reservations = response.data;
            const formattedReservations = formatReservationsForDatePicker(reservations);
            setOccupiedTimes(formattedReservations);
          })
          .catch(error => {
            console.error("Error:", error);
          });
      } else {
        console.log("El id del vet es null");
      }
    };
  
    const formatReservationsForDatePicker = (reservations) => {
      const formattedReservations = [];
      reservations.forEach(reservation => {
        const [year, month, day, hour, minute] = reservation;
        const date = new Date(year, month - 1, day, hour, minute);
        formattedReservations.push(date);
      });
      return formattedReservations;
    };
    const [excludeTimesForSelectedDate, setExcludeTimesForSelectedDate] = useState([]);
  
  
    const handleBooking = (e) => {
      e.preventDefault();
      if(requestData.appointmentDateTime && requestData.appointmentReason && requestData.customerId && requestData.petIds && requestData.vetId){
        axios.post('http://localhost:8080/appointment/create', requestData, config)
          .then(response => {
            console.log('reserva creada exitosamente', response.data);
            if(response.status === 200 || response.status === 201){
              console.log('se muestra mensaje de exito al usuario')
              Swal.fire({
                icon: "success",
                iconColor: '#831742',
                title: "¡Pronto!",
                html: "<p>La reserva ha sido creada <b>exitosamente</b></p>",
                confirmButtonText: "Ok",
                showConfirmButton: true,
                confirmButtonColor: '#831742'
              })
              form.current.reset();
              setReservationCreated(true); 
              dispatch({ type: 'RESET_FORM' }); 
              setTimeout(() => { 
                setReservationCreated(false);
              }, 3000); 
            }
          })
          .catch((error) => { 
            console.log("error del servidor", error)
            Swal.fire({
              icon: "error",
              title: "Hubo un error",
              html: "Inténtalo de nuevo. <b>Confirma que todos los campos estén completos y sean correctos</b>"
            })
          })
      } else {
        Swal.fire({
          icon: "info",
          title: "¡Hubo un error!",
          html: "Para realizar una reserva, <b>todos los campos del formulario deben estar completos</b>",
          confirmButtonText: "Ok",
          showConfirmButton: true,
          confirmButtonColor: '#831742'
        })
      }
    }
  
    useEffect(() => {
      axios.get('http://localhost:8080/vet/list')
        .then(response => {
          setVetList(response.data)
        })
    }, [])
  
  return (
    <>
       <Navbar />
        <div className='ctn-booking'>
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
                            value={userLogged?.name}
                            placeholder='Nombre'
                            >
                            </input>
                            <input className='book-input' 
                            type='text' 
                            value={userLogged?.lastName}
                            placeholder='Apellido'
                            >
                        </input>
                    </div>
                    <div className='customer-data'>
                        <input className='book-input' 
                            type='text' 
                            value={userLogged?.email}
                            placeholder='email'
                            >
                            </input>
                            <input className='book-input' 
                            type='number' 
                            value={userLogged?.contactNumber}
                            placeholder='Número'
                            >
                        </input>
                    </div>
                    <div className='customer-address'>
                        <input className='book-input-address' 
                            type='text' 
                            value={userLogged?.address}
                            placeholder='Dirección'
                            >
                        </input>
                    </div>
                </div>
                <div className='booking-info'>
                    <h3>Datos de la consulta</h3>
                    <div className='data-info'>
                        <select defaultValue={1} className='book-input' onChange={e => {
                            handleInputChange('dataConsulta', 'nombreVeterinario', e.target.value);
                            setVetId(e.target.value); 
                        }}>
                        <option value={1} disabled>Selecciona un veterinario</option>
                        {
                            vetList?.map(vet => (
                            <option key={vet.id} value={vet.id}>
                                {vet.name}, {vet.surname}
                            </option>
                            ))
                        }
                        </select>
                        <DatePicker
                            value={selectedDate}
                            selected={selectedDate}
                            onChange={handleDateChange}
                            excludeTimes={excludeTimesForSelectedDate} 
                            format="yyyy-MM-dd'T'HH:mm:ss.SSSxxx" 
                            timeIntervals={30}
                            timeCaption="Hora"
                            placeholderText="Selecciona una fecha y hora"
                            showTimeSelect
                            timeFormat="p"
                            dateFormat="Pp"
                            minDate={addDays(new Date(), 1)}
                            minTime={setHours(setMinutes(new Date(), 30), 9)}
                            maxTime={setHours(setMinutes(new Date(), 30), 20)}
                        /> 
                    </div>
                    <select defaultValue={1} className='select-booking' 
                    onChange={e => handleInputChange('dataMascota', 'id', e.target.value)}
                    >
                    <option value={1} disabled>Selecciona tu mascota</option>
                    {
                        userLogged.pets && (
                        userLogged.pets.map(p => {
                            return <option key={p.id} value={p.id}>{p.petName}</option>
                        })
                        )
                    }
                    </select>
                    <textarea className='b-description' 
                    value={state.initialState?.dataConsulta?.motivoConsulta} 
                    placeholder='Describe el motivo de consulta'
                    onChange={e => handleInputChange('dataConsulta', 'motivoConsulta', e.target.value)}
                    >
                    </textarea>
                </div>
                <div className='button-logo'>
                    <button className='booking-btn' onClick={handleBooking}>Reservar</button>
                    <h1 className='logo-form'>VET HOME</h1>
                </div>
            </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Reservation
