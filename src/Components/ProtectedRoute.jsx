import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) { //funcion la cual comprueba que el usuario este logeado adentro de el sitio y con ello protejemos rutas de usuarios no logeadosd
    const { user, loading } = useAuth()

    if (loading) return <h1>loading</h1> //Devuelve el texto loading en la carga

    if (!user) return <Navigate to='/login' /> //Si no hay un usuario logeado redireccion a el login

    return <>{children}</>

}

//Tambien sirven las ProtectedRoutes para cuando se tiene una doble pestania o sesion y en una se deslogea, con esto se deslogean todas las sesiones si se hace la accion


