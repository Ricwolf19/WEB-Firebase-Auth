import { useState } from "react"; //UserRef nos permite atravez de la referencia de un componente obtener el valor que nos devuelve el mismo componente (Vacio)
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
//import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [user, setUser] = useState({ //Se exporta un useState para poder guardar el email y el password del usuario
    email: '',
    password: ''
  })

  const siteKey = "6LdPmGwpAAAAANHjG3BVHr1DPtqodRh-bL4K6DTd"
  const { signUp } = useAuth();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => { //Funcion para actualizar el estado
    //console.log(e.target.name, e.target.value); Se van mostrando todo lo que hay adentro de los inputs en consola
    //console.log(name, value)
    setUser({ ...user, [name]: value }) //Se tiene adentro de {Por que es un objeto el usuario}
  } //Se hace una funcion con cambio

  const handleCaptchaChange = (token) => { //Tambien se puede hacer simplemente poniendo un valor en () y consologeando ese mismo valor en la funcion
    setCaptchaToken(token);
  };

  //Para que funcione el await tiene que tener la palabra clave asyn en la funcion para indicar asyncrono y ejecutar acciones asyncronicas
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      if (!captchaToken) {
        throw new Error("The captcha is necessary");
      }
  
      await signUp(user.email, user.password);
    } catch (error) {
      console.error("Signup Error:", error.code, error.message);
  
      if (error.code === "auth/email-already-in-use") {
        setError("Email address is already in use.");
      } else {
        setError(error.message);
      }
    }
  };
  
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

        <div className="pl-[20%] mt-4 w-full md:w-3/4 lg:w-1/2">
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={handleCaptchaChange}
            size="compact"
            theme="dark"
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>

      </form>

      <p className="my-4 text-sm flex justify-between px-5">Already have an account?<Link to={'/Login'}>Login</Link></p>

    </div>
  )
}
