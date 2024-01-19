import { useAuth } from "../context/authContext" //Se importa el useAuth del authContext para poder usarlo en el home

export function Home() {

  const { user, logOut, loading } = useAuth() //Se exportan las propiedades necesarias para todo 

  const handleLogout = async () => { //Se crea una funcion asyncrona para poder deslogearse
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  /* if (!user) { //Si no se tiene usuario se redirige al login
    navigate('/login')
  } Esto esta en ProtectedRoute*/


  //{/*Mensaje logeando*/}
  if (loading) return <h1>Loading</h1>

  //console.log(user) //Se puede ver que el usuario esta activo ya con su autentificacion y se usara para poder darse cuenta de su logeo en diferentes sitios de la web

  return (<div>
    <h1>Welcome {user.displayName || user.email}</h1> {/* Si se logea con un servicio que lo imprima en pantalla en vez del correo */}
    <button onClick={handleLogout}>Logout</button>
  </div>
  )
}

