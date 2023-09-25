import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const user = {
    name: "",
    lastName: "",
    address: "",
    contactNumber: "",
    email: "",
    password: ""
}

const dataUserLogged = {
    name: "",
    lastName: "",
    address: "",
    contactNumber: "",
    email: ""
}

// hacer el llamado de una peticion, buscar el usuario por su email y guardar la data recibida en un state:
// entonces, en el state ya estaran los datos del usuario que ha iniciado sesion y podré acceder a ellos desde el navbar.

export const UserProvider = ({children}) => {
    
    const [dataUser, setDataUser] = useState(user); //Almacena info de usuario creado
    const [isLogged, setIsLogged] = useState(false); //Almacena un valor true or false, indica si el usuario ha iniciado sesión o no
    const [userLogged, setUserLogged] = useState(dataUserLogged); //Almacena info de usuario logueado

    const findUserByEmail = (email) => {
        axios.get(`http://localhost:8080/customer/findByEmail/${email}`)
        .then(response => {
            setUserLogged(response.data)
        })
    }
    //usuario logueado datos:
    console.log("datos de usuario logueado:", userLogged)

    return(
        <UserContext.Provider value={{
                                    dataUser, 
                                    setDataUser,
                                    isLogged,
                                    setIsLogged,
                                    userLogged,
                                    setUserLogged,
                                    findUserByEmail
                                    }}>
            {children}
        </UserContext.Provider>
    )
}