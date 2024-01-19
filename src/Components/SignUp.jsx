import { useState } from "react";
import { useAuth } from "../context/authContext";
//import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [user, setUser] = useState({ //Se exporta un useState para poder guardar el email y el password del usuario
    email: '',
    password: ''
  })

  const { signUp } = useAuth();
  // const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => { //Funcion para actualizar el estado
    //console.log(e.target.name, e.target.value); Se van mostrando todo lo que hay adentro de los inputs en consola
    //console.log(name, value)
    setUser({ ...user, [name]: value }) //Se tiene adentro de {Por que es un objeto el usuario}
  } //Se hace una funcion con cambio

  //Para que funcione el await tiene que tener la palabra clave asyn en la funcion para indicar asyncrono y ejecutar acciones asyncronicas
  const handleSubmit = async e => { //Funcion para ver que es lo que tiene el estado
    e.preventDefault()
    setError('')
    try { //El try se utiliza para poder registrarse y despues navegar hacia el home con navigate de react-router-dom
      await signUp(user.email, user.password)  //TODA PETICION HACIA UN BACKEND ES ASYNCRONO(Se ejecuta simultaneamente)
      // navigate('/') //Redireccion a HOME
    } catch (error) {
      // console.log(error.code)
      setError(error.message);
    }
  }

  return ( //Se hace un form para poder ingresar los datos del usuario, (Importante name y onChange)
    <div>

      {error && <p>{error}</p>} {/*Asi se lanza el error a pantalla si hay*/}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="yourEmail@gmail.ltd"
          onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password" //Si el nombre es diferente que los demas datos se toma como extra y error (BUG) (TENER TODO IGUAL)
          id="password"
          placeholder="******"
          onChange={handleChange} />

        <button>Register</button>

      </form>
    </div>
  )
}
