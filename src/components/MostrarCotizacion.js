import React from "react";

const MostrarCotizacion = ({resultado}) => {
  return (
    <div className="bg-dark text-light p-5 rounded my-3 text-center">
      <p>El valor de tu seguro seria ${resultado}</p>
    </div>
  );
};

export default MostrarCotizacion;
