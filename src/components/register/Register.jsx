import "./Register.css"
import { useForm } from "react-hook-form";
import { Volver } from "../click-volver/Volver"
import { useNavigate } from "react-router-dom";
import { datosUsuario } from "../../util/DatosUsuario";
import { ValidateAño } from "../Validacion/ValidateAño";
import Swal from "sweetalert2";
export const Register = () => {
  const {register,handleSubmit,formState: { errors },setFocus,reset,watch,} = useForm()
  const navigate = useNavigate();
  const onSubmit = (data) =>{
    const apiUrl = "http://localhost:8081/api/usuario/registrar";
    const usuario = datosUsuario(data);
    
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    }).then((response) => {
      if (response.ok) {
        console.log("Datos enviados correctamente");
        Swal.fire({
          title: 'Registro exitoso',
          text: 'El usuario ha sido registrado correctamente',
          icon: 'success',
          showConfirmButton: false, // No mostrar botón "OK"
          timer: 2000 // Tiempo de visualización en milisegundos (3 segundos en este caso)
        });
        reset();
        setTimeout(() => {
          navigate("/");
        }, 2000); // La alerta se mostrará durante 3 segundos antes de redirigir
        
      } else {
        console.error("Error al enviar los datos");
        Swal.fire('Error', 'Hubo un error al registrar el usuario', 'error');
      }
    }).catch((error) => {
      console.error("Error en la solicitud:", error);
      Swal.fire('Error', 'Hubo un error en la solicitud', 'error');
    });
    console.log(data);
    setFocus("nombre");
    
  
  }
  const logearme=()=>{
    navigate("/login");
  }
  return (
    <>
    <div className="form-container border">
  <h2>Registrate</h2>
    <Volver/>
    <form className="form border" onSubmit={handleSubmit(onSubmit)}>
{/*=============NOMBRE===============================================================================*/}
      <fieldset>
      <legend><h2>Datos Personales</h2></legend>
      <div className="container-input border">
      <div className="watch">
      <i className="fa-regular fa-user"></i>
      <p>Nombre:{watch("nombre")}</p>
      </div>
      <div className="contenedor-label-input border">
      <label htmlFor="nomber"></label>
      <input type="text" placeholder="Nombre" {... register("nombre",{
        required:true,
        maxLength:20,
        pattern:/^[A-Za-z\s]+$/u
      })}/>
      {errors.nombre?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.nombre?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
      {errors.nombre?.type==="pattern" && <p className="mensaje-error">Debe colocar solo letras</p>}
      </div>
      </div>
{/*=================APELLIDO===========================================================================*/}
      <div className="container-input border">
      <div className="watch">
      <i class="fa-solid fa-user-tie"></i>
      <p>Apellido:{watch("apellido")}</p>
      </div>
      <div className="contenedor-label-input border">
      <label htmlFor="apellido"></label>
      <input type="text" placeholder="Apellido"{... register("apellido",{
        required:true,
        maxLength:20,
        pattern:/^[A-Za-z\s]+$/u
      })}/>
       {errors.apellido?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
       {errors.apellido?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
       {errors.apellido?.type==="pattern" && <p className="mensaje-error">Debe colocar solo letras</p>}
     </div>
     </div>
{/*==============================E-MAIL==============================================================*/}
    <div className="container-input border">
    <div className="watch">
    <i className="fa-regular fa-envelope"></i>
    <p>E-mail: <strong>{watch("email")}</strong></p>
    </div>
    <div className="contenedor-label-input border">
    <label htmlFor="email"></label>
      <input type="email" placeholder="E-mail" {... register("email",{
        required:true,
        maxLength:25,
        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
      })}/>
       {errors.email?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.email?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 25 caracteres</p>}
      {errors.email?.type==="pattern" && <p className="mensaje-error">Debe ingresar un e-mail valido</p>}
    </div>
    </div>
{/*=======================DNI=====================================================================*/}
    <div className="container-input border">
    <div className="watch">
    <i class="fa-regular fa-address-card"></i>
    <p>Dni: <strong>{watch("dni")}</strong></p>
    </div>
    <div className="contenedor-label-input border">
    <label htmlFor="dni"></label>
      <input type="text"placeholder="Dni" {... register("dni",{
        required:true,
        maxLength:20
      })}/>
       {errors.dni?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.dni?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
    </div>
    </div>
{/*======================FECHA NACIMIENTO======================================================================*/}
    <div className="container-input border">
    <div className="watch">
    <i class="fa-regular fa-calendar"></i>
    <p>Fecha Nacimiento: <strong>{watch("fechaNacimiento")}</strong></p>
    </div>
    <div className="contenedor-label-input border"> 
    <label htmlFor="fechaNacimiento"></label>
      <input type="date" placeholder="Fecha Nacimiento"{... register("fechaNacimiento",{
        required:true,
        maxLength:20,
        validate:ValidateAño
      })}/>
      {errors.fechaNacimiento?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.fechaNacimiento?.type==="maxLength" &&<p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
      {errors.fechaNacimiento?.type==="validate" && <p className="mensaje-error">Debes tener mas de 18 años</p>}
     </div>
     </div>
{/*==========================CREAR CONTRASEÑA==================================================================*/}
    <div className="container-input border">
    <div className="watch">
    <i className="fa-solid fa-lock"></i>
    <p>Crear contraseña: <strong>{watch("password")}</strong></p>
    </div>
    <div className="contenedor-label-input border">
    <label htmlFor="password"></label>
      <input type="password" placeholder="Contraseña"{... register("password",{
        required:true,
        maxLength:20
      })}/>
      {errors.password?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.password?.type==="maxLength"&& <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
    </div>
    </div>
</fieldset>
{/*===========================CALLE=================================================================*/}
      <fieldset>
      <legend><h2>Direccion</h2></legend>
      <div className="container-input border">
      <div className="watch">
      <i class="fa-solid fa-road"></i>
      <p>Calle: <strong>{watch("calle")}</strong></p>
      </div>
      <div className="contenedor-label-input border">
      <label htmlFor="calle"></label>
      <input type="text"placeholder="Calle" {... register("calle",{
        required:true,
        maxLength:20
      })}/>
       {errors.calle?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.calle?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
     </div>
     </div>
 {/*==========================NUMERO==================================================================*/}
    <div className="container-input border">
    <div className="watch">
    <i class="fa-solid fa-hashtag"></i>
    <p>Numero: <strong>{watch("numero")}</strong></p>
    </div>
    <div className="contenedor-label-input border">
    <label htmlFor="numero"></label>
      <input type="number" placeholder="Numero"{... register("numero",{
        required:true,
        maxLength:5
      })}/>
      {errors.numero?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.numero?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 5 caracteres</p>}
     </div>
     </div>
{/*=========================DEPTO===================================================================*/}
     <div className="container-input border">
     <div className="watch">
     <i class="fa-regular fa-building"></i>
     <p>Depto: <strong>{watch("dpto")}</strong></p>
     </div>
     <div className="contenedor-label-input border">
     <label htmlFor="dpto"></label>
      <input type="text"placeholder="Departamento" {... register("dpto",{
        required:true,
        maxLength:20
      })}/>
       {errors.dpto?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.dpto?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
     </div>
     </div>
{/*=========================PAIS===================================================================*/}
    <div className="container-input border">
    <div className="watch">
    <i class="fa-solid fa-earth-americas"></i>
    <p>Pais: <strong>{watch("pais")}</strong></p>
    </div>
    <div className="contenedor-label-input border">
    <label htmlFor="pais"></label>
      <input type="text"placeholder="Pais" {... register("pais",{
        required:true,
        maxLength:20
      })}/>
       {errors.pais?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.pais?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
     </div>
     </div>
{/*==========================PROVINCIA==================================================================*/}
   <div className="container-input border">
   <div className="watch">
   <i class="fa-solid fa-panorama"></i>
    <p>Provincia:<strong>{watch("provincia")}</strong></p>
    </div>
    <div className="contenedor-label-input border">
    <label htmlFor="provincia"></label>
      <input type="text"placeholder="provincia" {...register("provincia",{
        required:true,
        maxLength:20
      })}/>
       {errors.provincia?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.provincia?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
    </div>
    </div>
{/*==========================LOCALIDAD==================================================================*/}
   <div className="container-input border">
   <div className="watch">
    <i class="fa-solid fa-tree-city"></i>
    <p>Localidad:<strong>{watch("localidad")}</strong></p>
    </div>
    <div className="contenedor-label-input border">
    <label htmlFor="localidad"></label>
      <input type="text"placeholder="Localidad" {...register("localidad",{
        required:true,
        maxLength:20
      })}/>
       {errors.localidad?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.localidad?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
    </div>
    </div>
{/*============================BARRIO================================================================*/}
    <div className="container-input border">
    <div className="watch">
    <i class="fa-solid fa-road-barrier"></i>
    <p>Barrio: <strong>{watch("barrio")}</strong></p>
    </div>
    <div className="contenedor-label-input border">
    <label htmlFor="barrio"></label>
      <input type="text" placeholder="Barrio"{... register("barrio",{
        required:true,
        maxLength:20
      })}/>
      {errors.barrio?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.barrio?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
    </div>
    </div>
    </fieldset>
    {/*============================TELEFONO================================================================*/}
    <fieldset>
    <legend><h2>Contacto</h2></legend>
    <div className="container-input border">
        <div className="watch">
        <i class="fa-solid fa-phone"></i>
          <p>Telefono: <strong>{watch("telefono")}</strong></p>
        </div>
        <div className="contenedor-label-input border">
          <label htmlFor="telefono"></label>
          <input 
            type="tel" 
            placeholder="Teléfono" 
            {...register("telefono", {
              required: true,
              maxLength: 20,
              pattern: /^[0-9\b]+$/ // Expresión regular para validar que solo se ingresen números
            })}
          />
          {errors.telefono?.type === "required" && <p className="mensaje-error">Este campo es requerido</p>}
          {errors.telefono?.type === "maxLength" && <p className="mensaje-error">Este campo debe tener menos de 20 caracteres</p>}
          {errors.telefono?.type === "pattern" && <p className="mensaje-error">Por favor, ingrese un número de teléfono válido</p>}
     </div>
     </div>
     </fieldset>
      <div className="submit-btn  border">
      <input type="submit" value="Crear Cuenta" />
      </div>
      <p>Ya eres usuario ? <button className="login" onClick={logearme}>Acceso</button></p>
     </form>
      <Volver/>
    </div>
    </>
  )
}

