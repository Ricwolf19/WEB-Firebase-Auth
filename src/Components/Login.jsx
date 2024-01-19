import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ //Se exporta un useState para poder guardar el email y el password del usuario
    email: '',
    password: ''
  })

  const { login, loginWithGoogle, resetPassword } = useAuth(); //Se exporta login para poder logearse en la web
  //const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => { //Funcion para actualizar el estado
    //console.log(e.target.name, e.target.value); Se van mostrando todo lo que hay adentro de los inputs en consola
    //console.log(name, value)
    setUser({ ...user, [name]: value }) //Se tiene adentro de {Por que es un objeto el usuario}
  } //Se hace una   funcion con cambio

  //Para que funcione el await tiene que tener la palabra clave asyn en la funcion para indicar asyncrono y ejecutar acciones asyncronicas
  const handleSubmit = async (e) => { //Funcion para ver que es lo que tiene el estado
    e.preventDefault()
    setError('')
    try { //El try se utiliza para poder registrarse y despues navegar hacia el home con navigate de react-router-dom
      await login(user.email, user.password)  //TODA PETICION HACIA UN BACKEND ES ASYNCRONO(Se ejecuta simultaneamente)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      //throw new Error('google Error') Se utiliza para Tirar errores con el proposito de probar el try Catch
      await loginWithGoogle(); //Se espera al logeo con autenticacion con google
      navigate("/"); //Redirije al Home
    } catch (error) {
      setError(error.message);
    }
  }

  const handleResetPassword = async () => { //Funcion asyncrona para poder recuperar la contrasenia
    if (!user.email) return setError('Please enter your email')
    try {
      await resetPassword(user.email)
      setError('We sent you an email with a link to reset your password');
    } catch (error) {
      setError(error.mesagge)
    }
  }

  return ( //Se hace un form para poder ingresar los datos del usuario, (Importante name y onChange)
    <div className="w-full max-w-xs m-auto">

      {error && <Alert mesagge={error} />} {/*Asi se lanza el error a pantalla si hay*/}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-fold mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="yourEmail@gmail.ltd"
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange} />

        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password" //Si el nombre es diferente que los demas datos se toma como extra y error (BUG) (TENER TODO IGUAL)
            id="password"
            placeholder="******"
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange} />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          <a href="#!" className=" inline-block align-baseline font-bold text-blue-500 text-sm hover:text-blue-800" onClick={handleResetPassword}>Forgot Password</a>
        </div>
      </form>

      <p className="my-4 text-sm flex justify-between px-4">Don't have an account?<Link to={'/signUp'}>Register</Link></p>

      <button onClick={handleGoogleLogin} className="bg-slate-50 hover:bg-slate-100 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full">Google Login</button>

    </div>
  )
}
