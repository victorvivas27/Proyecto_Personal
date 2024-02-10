import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navigation_bar/NavBar"
import { Register } from "../components/register/Register"
import { Home } from "../components/Home/Home"
import { Login } from "../components/login/Login"
import { Productos } from "../components/productos/Productos"
import { Juegos } from "../components/juegos/Juegos"
import {MiPerfil} from "../components/perfil/MiPerfil"
import { MisCompras } from "../components/MisCompras/MisCompras"
import { AgregarDireccion } from "../components/perfil/AgregarDireccion"




 export const RouterNavBar = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<NavBar/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/productos" element={<Productos/>} />
      <Route path="/juegos" element={<Juegos/>} />
      <Route path="/miperfil" element={<MiPerfil/>} />
      <Route path="/miscompras" element={<MisCompras/>} />
      <Route path="/agregardireccion" element={<AgregarDireccion/>} />
    
      <Route path="/" element={<Navigate to="home"/>} />
    </Routes>
    </>
  )
}

