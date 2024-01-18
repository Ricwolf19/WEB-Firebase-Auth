import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext" //Se importa el useAuth del authContext para poder usarlo en el home

export function Home() {
  
  const { user, logOut, loading } = useAuth() //Se exportan las propiedades necesarias para todo 
  const navigate = useNavigate() //Se exporta para redirigir

  const handleLogout = async () => { //Se crea una funcion asyncrona para poder deslogearse
    await logOut()
    navigate('/login')
  }

  if (!user) { //Si no se tiene usuario se redirige al login
    navigate('/login')
  }

  
//{/*Mensaje logeando*/}
if (loading) return <h1>Loading</h1>

   //console.log(user) //Se puede ver que el usuario esta activo ya con su autentificacion y se usara para poder darse cuenta de su logeo en diferentes sitios de la web

    return ( <div>
       <h1>Welcome {user.email}</h1>
       <button onClick={handleLogout}>Logout</button>
    </div>
    )
}

