import React, { useState } from "react";
import styled from "@emotion/styled";

const Formulario = () => {
  const datosIniciales = { marca: "", año: "", origen: "", plan: "" };

  const [cotizacion, setCotizacion] = useState({ ...datosIniciales });

  const cotizar = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCotizacion({ ...cotizacion, [name]: value });
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
        <select name="marca" onChange={cotizar}>
          <option value="Ford">Ford</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Fiat">Fiat</option>
          <option value="BMW">BMW</option>
        </select>
      </Campo>
      <Campo className="mb-3">
        <Label>Año</Label>
        <select name="año" onChange={cotizar}>
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
          onChange={cotizar}
        />
        Americano
        <InputRadio
          type="radio"
          name="origen"
          value="Europeo"
          onChange={cotizar}
        />
        Europeo
      </Campo>
      <Campo className="mb-3">
        <Label>Plan</Label>
        <InputRadio type="radio" name="plan" value="Full" onChange={cotizar} />
        Full
        <InputRadio
          type="radio"
          name="plan"
          value="Economico"
          onChange={cotizar}
        />
        Economico
      </Campo>
      <button className="btn btn-block btn-success">Enviar</button>
    </form>
  );
};

export default Formulario;
