export const diferenciaYear = (year) => {
  return new Date().getFullYear() - year;
};

export const agregadoMarca = (marca) => {
  let incremento;

  if (marca === "Fiat" || marca === "Chevrolet") {
    incremento = 1.1;
  } else if (marca === "Ford") {
    incremento = 1.25;
  } else {
    incremento = 1.4;
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
