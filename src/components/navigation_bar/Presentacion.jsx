
import "./Presentacion.css";

export const Presentacion = () => {
  return (
    <>
      <div className="container-titulo">
        <img src="https://via.placeholder.com/100" alt="Imagen de presentación" className="fixed-image" />
        <div className="titulo-content">
          <h1>Bienvenido a mi página web</h1>
          <p>Esta es una página web hecha con React.js</p>
        </div>
      </div>
      <div className="container-cajas">
        <div className="caja-container">
          {[...Array(16).keys()].map((index) => (
            <section key={index} className="caja">Caja {index + 1}</section>
          ))}
        </div>
      </div>
    </>
  );
};
