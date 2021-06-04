import React, { useState } from "react";
import Formulario from "./Formulario";
import MostrarCotizacion from "./MostrarCotizacion";
import Spinner from "./Spinner";

const Home = () => {
  const [resultado, setResultado] = useState();

  const [cargando, setCargando] = useState(false)

  return (
    <div className="container my-5">
      <h1>Cotizador de seguros</h1>
      <Formulario setResultado={setResultado} setCargando={setCargando}/>
      {cargando ? <Spinner /> : ""}
      {resultado ? <MostrarCotizacion resultado={resultado} /> : ""}
    </div>
  );
};

export default Home;
