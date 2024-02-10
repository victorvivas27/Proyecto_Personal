import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { agregarTelefono } from "../../util/AgregarTelefono";


export const AgregarTelefono = () => {
    const {register,handleSubmit,formState: { errors },setFocus,reset,watch,} = useForm()
    const navigate = useNavigate();
    const onSubmit = (data) =>{
      const apiUrl = "http://localhost:8081/api/telefono/telefonoNuevo";
      const telefono = agregarTelefono(data);
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(telefono),
      }).then((response) => {
        if (response.ok) {
          console.log("Datos enviados correctamente");
          Swal.fire({
            title: 'Telefono agregado exitosamente',
            text: 'Nuevo Telefono ha sido agregada correctamente',
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
          Swal.fire('Error', 'Hubo un error al registrar el telefono', 'error');
        }
      }).catch((error) => {
        console.error("Error en la solicitud:", error);
        Swal.fire('Error', 'Hubo un error en la solicitud', 'error');
      });
      console.log(data);
      setFocus("telefono")
      }
  return (
    <>
    <form className="form border" onSubmit={handleSubmit(onSubmit)}>
        
    <fieldset>
    <legend><h2>Nuevo Telefono</h2></legend>
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
        maxLength:3,
        pattern: /^[0-9\b]+$/ // Expresión regular para validar que solo se ingresen números
      })}/>
      {errors.usuario_id?.type==="required" && <p className="mensaje-error">Este campo es requerido</p>}
      {errors.usuario_id?.type==="maxLength" && <p className="mensaje-error">Este campo debe tener menos de 3 caracteres</p>}
      {errors.usuario_id?.type === "pattern" && <p className="mensaje-error">Por favor, ingrese solo numeros</p>}
     </div>
     </div>
{/*============================TELEFONO_Nuevo================================================================*/}
    <div className="container-input border">
        <div className="watch">
        <i class="fa-solid fa-phone"></i>
          <p>Telefono Nuevo: <strong>{watch("telefono")}</strong></p>
        </div>
        <div className="contenedor-label-input border">
          <label htmlFor="telefono"></label>
          <input type="tel" placeholder="Teléfono Nuevo" 
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
    <input type="submit" value="Agregar Direccion" />
    </div>
     </form>
    </>
  )
}
