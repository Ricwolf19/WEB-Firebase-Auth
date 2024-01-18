import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut /*Dispara evento de estado Ejem: cierra o abre sesion el user*/ } from "firebase/auth"; //Se exporta esta funcion que nos permite interactuar con firebase
import { auth, db } from '../Firebase'
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


export const authContext = createContext(); //Se exporta el contexto en una variable la cual ya este creado


export const useAuth = () => { //Se pasa el contenido a useAuth para asi poder usar el contexto
    const context = useContext(authContext)
    if (!context) throw new Error('There is not auth provider') //Si no hay contexto tirar el error
    return context
}

export function AuthProvider({ children }) { //Funcion para la autenticacion y dar validacion a todos los hijos de este funcion
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password) //El uso es enviar todos los datos a fireBase
            .then((creds) =>
                setDoc(doc(db, "users", creds.user.uid), { rol: "user" }),
            )
            .then(() => navigate("/"))
    };

    const login = async (email, password) => {
        /*const userCredantials = await */ signInWithEmailAndPassword(auth, email, password) //Se crea una funcion login y que usa la funcion signWith de Firebase para logearse
        //console.log(userCredantials) Informacion de credenciales extra de firebase diminuto easter-egg
        .then((creds) => {
            getDoc(doc(db, "users", creds.user.uid)).then((docSnap) => {
              if (docSnap.exists()) {
                switch (docSnap.data().rol) {
                  case "admin":
                    navigate("/AdminView");
                    break;
                  case "user":
                    navigate("/");
                    break;
                }
              }
            });
        })
    }

    const logOut = () => signOut(auth)

    useEffect(() => { //Cuando el usuario esta logerado esta funcion devuelve el objeto entero
        onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)          //console.log(currenUser) //Se almacenara para que los otros componentes puedan usarlo/
            setLoading(false)
        })

        //console.log('auth provider loader')
    }, [])

    return (
        <authContext.Provider value={{ signUp, login, user, logOut, loading }}>
            {children}
        </authContext.Provider>  //Se retorna el valor del objeto user y su hijo en un contexto
    )
}