export const tieneMayusculas = (clave: string): boolean => {
  let tieneMayusculas = false;

  if (clave.split("").some((caracter) => caracter === caracter.toUpperCase())) {
    tieneMayusculas = true;
  }

  return tieneMayusculas;
};

export const tieneMinusculas = (clave: string): boolean => {
  let tieneMinusculas = false;

  if (clave.split("").some((caracter) => caracter === caracter.toLowerCase())) {
    tieneMinusculas = true;
  }

  return tieneMinusculas;
};

export const tieneMayusculasYMinusculas = (clave: string): boolean => {
  return tieneMayusculas(clave) && tieneMinusculas(clave);
};
