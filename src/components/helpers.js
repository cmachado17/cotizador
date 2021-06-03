export const diferenciaYear = (year) => {
  return new Date().getFullYear() - year;
};

export const agregadoMarca = (marca) => {
  let incremento;
  switch (marca) {
    case ("Fiat", "Chevrolet"):
      incremento = 1.1;
      break;
    case "Ford":
      incremento = 1.25;
      break;
    case "BMW":
      incremento = 1.4;
      break;
    default:
      alert("Error al calcular la cotizacion");
      break;
  }

  return incremento;
};

export const definirOrigen = (origen) => {
  let incremento;

  if (origen === "Americano") {
    incremento = 1.3;
  } else {
    incremento = 1.5;
  }
  return incremento;
};

export const definirPlan = (plan) => {
  let incremento;

  if (plan === "Full") {
    incremento = 1.5;
  } else {
    incremento = 1.2;
  }

  return incremento;
};
