import React, { useState } from "react";
import Formulario from "./Formulario";
import MostrarCotizacion from "./MostrarCotizacion";

const Home = () => {
  const [resultado, setResultado] = useState();

  return (
    <div className="container my-5">
      <h1>Cotizador de seguros</h1>
      <Formulario setResultado={setResultado}/>
      {resultado ? <MostrarCotizacion resultado={resultado} /> : ""}
    </div>
  );
};

export default Home;
