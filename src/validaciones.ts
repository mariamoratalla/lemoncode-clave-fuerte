export const tieneMayusculas = (clave: string): boolean =>
  clave.split("").some((caracter) => caracter === caracter.toUpperCase());

export const tieneMinusculas = (clave: string): boolean =>
  clave.split("").some((caracter) => caracter === caracter.toLowerCase());

export const tieneMayusculasYMinusculas = (clave: string): boolean =>
  tieneMayusculas(clave) && tieneMinusculas(clave);

export const tieneNumeros = (clave: string): boolean =>
  clave.split("").some((caracter) => !isNaN(Number(caracter)));

export const tieneCaracteresEspeciales = (clave: string): boolean => {
  const caracteresEspeciales: string[] = [
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "{",
    "}",
    "]",
    "\\",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
    "`",
    "~",
  ];

  return clave
    .split("")
    .some((caracter) => caracteresEspeciales.includes(caracter));
};

export const tieneLongitudMinimaOchoCaracteres = (clave: string): boolean =>
  clave.length >= 8;

export const tieneElNombreDeUsuario = (
  clave: string,
  nombreUsuario: string
): boolean => clave.toLowerCase().includes(nombreUsuario.toLowerCase());

export const tienePalabrasComunes = (
  clave: string,
  palabrasComunes: string[]
): boolean =>
  palabrasComunes.some(
    (palabra) => palabra.toLowerCase() === clave.toLowerCase()
  );
