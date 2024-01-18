import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { SignUp } from './Components/SignUp';
import { AuthProvider } from "./context/authContext"; //Se da el contexto

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;