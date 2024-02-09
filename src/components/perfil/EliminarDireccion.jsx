import { useContext } from "react";
import { MyContext } from "../../contexto/MyContext";

export const useEliminarDireccion = () => {
  const { setActualizar } = useContext(MyContext);

  const eliminarDireccion = (direccionId) => {
    const url = `http://localhost:8081/api/direccion/eliminar/${direccionId}`;

    fetch(url, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al eliminar la dirección');
      }
      console.log('Dirección eliminada correctamente');
      setActualizar(true); // Actualizar el estado para forzar una nueva renderización del componente
    })
    .catch(error => {
      console.error('Error al eliminar la dirección:', error);
    });
  };

  return eliminarDireccion;
};
  
  
