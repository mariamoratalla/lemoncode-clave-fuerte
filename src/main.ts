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
  let validar: ValidacionClave = {
    esValida: true,
  };

  if (!tieneMayusculasYMinusculas(clave)) {
    (validar.esValida = false),
      (validar.error = "La clave debe de tener mayúsculas y minúsculas");
  }

  if (!tieneNumeros(clave)) {
    (validar.esValida = false),
      (validar.error = "La clave debe de tener números");
  }

  if (!tieneCaracteresEspeciales(clave)) {
    (validar.esValida = false),
      (validar.error = "La clave debe de tener caracteres especiales");
  }

  if (!tieneLongitudMinimaOchoCaracteres(clave)) {
    (validar.esValida = false),
      (validar.error =
        "La clave debe de tener una longitud mínima de 8 caracteres");
  }

  if (tieneElNombreDeUsuario(clave, nombreUsuario)) {
    (validar.esValida = false),
      (validar.error = "La clave no debe tener el nombre del usuario");
  }

  if (tienePalabrasComunes(clave, commonPasswords)) {
    (validar.esValida = false),
      (validar.error = "La clave no debe de contener palabras comunes");
  }
  return validar;
};
