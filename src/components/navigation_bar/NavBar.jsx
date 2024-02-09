import { NavLink, useNavigate } from "react-router-dom"
import "./NavBar.css"
import "./Boton.css"
import "./Boton2.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { Presentacion } from "./Presentacion";
import { useState } from "react";

  export const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] =useState(false)
  const navegacion=useNavigate()
  const cerrarSecion=()=>{
    navegacion("/")
    setIsLoggedIn(false)
  }
  const iniciarSecion=()=>{
    setIsLoggedIn(true)
  }
  return (
    <>
   <nav className="conteiner-nav">
    <div className="nav" >
    <NavLink className="nav-link btn draw-border" to="home"><HomeOutlinedIcon className="icon" style={{ color:'red', fontSize:30 }}/>Home</NavLink>
    </div>
   
    <div className="nav" >
    <NavLink className="nav-link btn draw-border" to="productos"> <FastfoodIcon className="icon"style={{ color:'red', fontSize:30 }} />Productos</NavLink>
    </div>
    <div className="nav" >
    <NavLink className="nav-link btn draw-border" to="juegos"> <VideogameAssetOutlinedIcon className="icon"style={{ color:'red', fontSize:30 }}/>Jugar</NavLink>
    </div>
    <div className="nav" >
    <NavLink className="nav-link btn draw-border" to="miperfil"> <PermContactCalendarOutlinedIcon className="icon"style={{ color:'red', fontSize:30 }} />Mi perfil</NavLink>
    </div>
    <div className="nav" >
    <NavLink  className="nav-link btn draw-border"to="misCompras"><LocalGroceryStoreOutlinedIcon className="icon"style={{ color:'red', fontSize:30 }} /> Mis compras </NavLink>
    </div>
    <div className="nav" >
    <NavLink className="nav-link btn draw-border" to="register"> <HowToRegOutlinedIcon className="icon" style={{ color:'red', fontSize:30 }}/>Registrate</NavLink>
    </div>
     {isLoggedIn ?(     
    <button className="boton-navbar boton3 " onClick={cerrarSecion}><LogoutOutlinedIcon className="icon"style={{ color:'red', fontSize:30 }}/>Cerrar secion</button>
     ):(
    <NavLink /*to="/login"*/><button className="boton-navbar boton3" onClick={iniciarSecion}><LoginOutlinedIcon className="icon"style={{ color:'red', fontSize:30 }}/><span class="text-green">Iniciar Secion</span></button></NavLink>
    )}
  </nav>

  <div className="conteiner-inagen-principal">
  <Presentacion/>
  <img className="imagen-principal" src="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg" alt="imagen-pizza" />
  </div>
  </>
  
  )
}

