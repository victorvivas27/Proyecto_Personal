import { useNavigate } from 'react-router-dom';
import './Volver.css';

 export const Volver = () => {
  const navegacion = useNavigate();

  const handleVolver = () => {
    navegacion("/");
  };

  return (
    <p className="volver" onClick={handleVolver}><strong><i className="fa-solid fa-arrow-rotate-left"></i></strong></p>
  );
};