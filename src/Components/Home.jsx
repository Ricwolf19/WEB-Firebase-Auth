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

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Welcome, User - {user.displayName || user.email}</h1>
      <div className="w-16 h-16 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all transform hover:scale-110">
        <UserIcon className="h-full w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200" />
      </div>
      <button className="mt-4 px-6 py-2 text-white bg-red-500 rounded-full transition-all transform hover:scale-110 hover:bg-red-600" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

