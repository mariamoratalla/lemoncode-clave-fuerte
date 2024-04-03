import { commonPasswords } from "./commonPasswords";
import "./style.css";
import {
  tieneCaracteresEspeciales,
  tieneElNombreDeUsuario,
  tieneLongitudMinimaOchoCaracteres,
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tienePalabrasComunes,
} from "./validaciones";

export interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!nombreUsuario || !clave) {
    throw new Error("Introduce clave y nombre de usuario");
  }

  if (tieneMayusculasYMinusculas(clave) === false) {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  }

  if (!tieneNumeros(clave)) {
    return {
      esValida: false,
      error: "La clave debe de tener números",
    };
  }

  if (!tieneCaracteresEspeciales(clave)) {
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
  }

  if (!tieneLongitudMinimaOchoCaracteres(clave)) {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  }

  if (tieneElNombreDeUsuario(clave, nombreUsuario)) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  }

  if (tienePalabrasComunes(clave, commonPasswords)) {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
  }
  return {
    esValida: true,
  };
};

console.log(validarClave("nombreUsuario", "Usuario123*", commonPasswords));
console.log(validarClave("nombreUsuario", "usuario123*", commonPasswords));
console.log(validarClave("nombreUsuario", "Usuario*", commonPasswords));
console.log(validarClave("nombreUsuario", "Usuario123", commonPasswords));
console.log(
  validarClave("nombreUsuario", "nombreUsuario123*", commonPasswords)
);
console.log(validarClave("nombreUsuario", "Password123*", commonPasswords));
console.log(validarClave("", "Password123*", commonPasswords));
console.log(validarClave("nombreUsuario", "", commonPasswords));
