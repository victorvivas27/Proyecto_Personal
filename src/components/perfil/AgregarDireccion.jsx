import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Volver } from "../click-volver/Volver";
import { agregarDireccion } from "../../util/AgregarDireccion";
export const AgregarDireccion = () => {
    const {register,handleSubmit,formState: { errors },setFocus,reset,watch,} = useForm()
    const navigate = useNavigate();
    const onSubmit = (data) =>{
      const apiUrl = "http://localhost:8081/api/direccion/direccionNueva";
      const direccion = agregarDireccion (data);
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(direccion),
      }).then((response) => {
        if (response.ok) {
          console.log("Datos enviados correctamente");
          Swal.fire({
            title: 'Direccion agregada exitosamente',
            text: 'Nueva direccion ha sido agregada correctamente',
            icon: 'success',
            showConfirmButton: false, // No mostrar botón "OK"
            timer: 2000 // Tiempo de visualización en milisegundos (3 segundos en este caso)
          });
          reset();
          setTimeout(() => {
            navigate("/miperfil");
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
      setFocus("calle")
      }
  return (
   <>
     <div className="form-container border">
     <h2>Agregar Direccion </h2>
     <Volver/>
     <form className="form border" onSubmit={handleSubmit(onSubmit)}>
     <fieldset>
     <legend><h2>Direccion</h2></legend>
{/*==========================USUARIO_ID==================================================================*/}
    <div className="container-input border">
    <div className="watch">
    <i class="fa-solid fa-hashtag"></i>
    <p>Usuario_id:<strong>{watch("usuario_id")}</strong></p>
    </div>
    <div className="contenedor-label-input border">
    <label htmlFor="usuario_id"></label>
      <input type="number" placeholder="Usuario"{... register("usuario_id",{
        required:true,
        maxLength:3
      })}/>
      {errors.id?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.id?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 3 caracteres</p>}
     </div>
     </div>
{/*===========================CALLE=================================================================*/}
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
    <div className="submit-btn  border">
    <input type="submit" value="Agregar Direccion" />
    </div>
    </form>
    </div>
    </>
  )
}
