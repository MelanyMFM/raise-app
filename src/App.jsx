import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Explore from './views/Explore/Explore';
import Emprendimiento from './views/Emprendimiento/Emprendimiento';
import CrearEmprendimiento from './views/CrearEmprendimiento/CrearEmprendimiento';
import Register from './views/Register/Register';
import Donate from "./views/Donate/Donate"
import EditProfile from './views/EditProfile/EditProfile';

function App() {

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para el formulario de inicio de sesión */}
        <Route path="/login" element = {<Login />}/>
        <Route path='/explore' element = {<Explore />}/>
        <Route path='/emprendimientos/:id' element = {<Emprendimiento />}/>
        <Route path='/crearEmprendimiento' element= {<CrearEmprendimiento />}/>
        <Route path='/register' element= {<Register />}/>
        <Route path="/donate/:id" element={<Donate />} />
        <Route path="/users/edit/:id" element={<EditProfile/>} />

      </Routes>
    </BrowserRouter>
  
  )
}

export default App;
