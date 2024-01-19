import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { SignUp } from './Components/SignUp';
import { AuthProvider } from "./context/authContext"; //Se da el contexto
import { AdminView } from './Components/AdminView';
import { ProtectedRoute } from './Components/ProtectedRoute';

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<ProtectedRoute> <Home /> </ProtectedRoute>} /> {/*Adentro de el componente ProtectedRoute proteje todas las rutas para usuarios no logeados*/}
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/adminView' element={<ProtectedRoute> <AdminView /> </ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;