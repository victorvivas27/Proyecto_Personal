import { useContext, useEffect } from "react";
import { Volver } from "../click-volver/Volver"
import Swal from "sweetalert2";
import "./MiPerfil.css"
import { useNavigate } from "react-router-dom";
import {useEliminarDireccion} from "./EliminarDireccion";
import { MyContext } from "../../contexto/MyContext";



export const MiPerfil = () => {
  const {setUsuario,usuario,setActualizar,actualizar}=useContext(MyContext)
  const eliminarDireccion = useEliminarDireccion()
  const navegacion=useNavigate();

  useEffect(() => {
    const obtenerUsuario = () => {
      const url = "http://localhost:8081/api/usuario/2";
      fetch(url)
      .then(response => response.json())
      .then(lectura => {
        setUsuario(lectura);
      })
      .catch(error => {
        console.error('Error al obtener el usuario:', error);
      });
    };
    
    obtenerUsuario();
  }, [setUsuario,actualizar]);
  
  const agregarDireccion=()=>{
    navegacion("/agregardireccion");
  }
  const eliminar = (direccionId) => {    
    if (window.confirm('¿Estás seguro de que deseas eliminar esta dirección?')) {
      eliminarDireccion(direccionId); 
      setActualizar(!actualizar);
      Swal.fire({
        title: 'Direccion agregada exitosamente',
        text: 'Nueva direccion ha sido agregada correctamente',
        icon: 'success',
        showConfirmButton: false, // No mostrar botón "OK"
        timer: 2000 // Tiempo de visualización en milisegundos (3 segundos en este caso)
      });
     
  }
}
  return (
    <>
    <div className="body">
    <div className="container-perfil">
      <div> <img src="" alt=""></img>  </div>
    {usuario && (
          <div key={usuario.id} className="datos">
          <h1>Mi Perfil</h1>
          <section>
          <h3>{usuario.nombre } {usuario.apellido}</h3>
          <p>Email: {usuario.email}</p>
          <p>Dni: {usuario.dni}</p>
          <p>Fecha Nacimiento: {usuario.fechaNacimiento}</p>
          <p>Email: {usuario.email}</p>
          </section>
          <hr/>
          <h2>Direcciones:</h2>
          <section className="container-direccion">
            {usuario.direcciones.map((direccion,index) => (
              <span key={index}><span onClick={()=>eliminar(direccion.id)}><i class="fa-solid fa-trash-can"></i></span>
                Calle: {direccion.calle}, Número: {direccion.numero}, Dpto:{" "}
                {direccion.dpto}, País: {direccion.pais}, Provincia:{" "}
                {direccion.provincia}, Localidad: {direccion.localidad}, Barrio:{" "}
                {direccion.barrio}
                <hr/>
                <br />
                </span>
              
            ))}
          </section>
          <h2>Telefonos:</h2>
          <section className="container-telefono">
            {usuario.telefonos.map((telefonos, index) => (
              <span key={index}> <span><i class="fa-solid fa-trash-can"></i></span>Telefono: {telefonos.telefono} </span>))}
              
          </section>
          <hr />
          </div>
          )}
       <div><button className="boton3 boton-perfil" onClick={agregarDireccion}>Agregar Direccion</button></div>
       <span><Volver/></span>
       </div>
      </div>
    </>
  )
}

