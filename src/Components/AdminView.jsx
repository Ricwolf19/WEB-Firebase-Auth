import { useAuth } from "../context/authContext" //Se importa el useAuth del authContext para poder usarlo en el home

export function AdminView() {

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

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-gray-200 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Welcome, Admin - {user.displayName || user.email}</h1>
      <div className="w-16 h-16 p-2 rounded-full bg-gray-300 dark:bg-gray-700 transition-all transform hover:scale-110">
        <UsersIcon className="h-full w-full text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200" />
      </div>
      <button className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-full transition-all transform hover:scale-110 hover:bg-blue-700" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
