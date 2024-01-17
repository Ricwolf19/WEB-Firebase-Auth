import {Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { SignUp } from './Components/SignUp';

function App() {
  return ( 
    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/SignUp' element={<SignUp/>} />

    </Routes>
   );
}

export default App;