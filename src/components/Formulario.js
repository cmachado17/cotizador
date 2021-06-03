import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  diferenciaYear,
  agregadoMarca,
  definirOrigen,
  definirPlan,
} from "./helpers";

const Formulario = ({setResultado}) => {
  const datosIniciales = { marca: "", año: "", origen: "", plan: "" };

  const [cotizacion, setCotizacion] = useState({ ...datosIniciales });

  const { marca, año, origen, plan } = cotizacion;

  //obtener datos del formulario
  const cotizar = (e) => {
    e.preventDefault();
    try {
      const { name, value } = e.target;
      setCotizacion({ ...cotizacion, [name]: value });
    } catch (error) {
      alert(error);
    }
  };

  const realizarCotizacion = (e) => {
    e.preventDefault();
    try {
      let resultado = 2000;

      const diferencia = diferenciaYear(año);
      const valorMarca = agregadoMarca(marca);
      const coeficienteOrigen = definirOrigen(origen);
      const coeficientePlan = definirPlan(origen);

      //por cada año de antiguedad se suma un 5% al valor
      resultado += (diferencia * 5 * resultado) / 100;
      resultado = resultado * valorMarca;
      resultado = resultado * coeficienteOrigen;
      resultado = resultado * coeficientePlan;

      setResultado(resultado);
      setCotizacion(datosIniciales);

    } catch (error) {
      alert(error);
    }
  };

  //styles components
  const Campo = styled.div`
    display: flex;
  `;
  const Label = styled.label`
    flex: 0 0 100px;
  `;

  const InputRadio = styled.input`
    margin: 0 5px;
  `;
  return (
    <form action="#" className="bg-dark p-5 text-light">
      <Campo className="mb-3">
        <Label>Marca</Label>
        <select name="marca" value={marca} onChange={cotizar}>
          <option value="" defaultValue>
            Seleccione una marca
          </option>
          <option value="Ford">Ford</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Fiat">Fiat</option>
          <option value="BMW">BMW</option>
        </select>
      </Campo>
      <Campo className="mb-3">
        <Label>Año</Label>
        <select name="año" value={año} onChange={cotizar}>
          <option value="" defaultValue>
            Seleccione un año
          </option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </Campo>
      <Campo className="mb-3">
        <Label>Origen</Label>
        <InputRadio
          type="radio"
          name="origen"
          value="Americano"
          checked={origen === "Americano"}
          onChange={cotizar}
        />
        Americano
        <InputRadio
          type="radio"
          name="origen"
          value="Europeo"
          checked={origen === "Europeo"}
          onChange={cotizar}
        />
        Europeo
      </Campo>
      <Campo className="mb-3">
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="Full"
          checked={plan === "Full"}
          onChange={cotizar}
        />
        Full
        <InputRadio
          type="radio"
          name="plan"
          value="Economico"
          checked={plan === "Economico"}
          onChange={cotizar}
        />
        Economico
      </Campo>
      <button
        className="btn btn-block btn-success"
        onClick={realizarCotizacion}
      >
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
