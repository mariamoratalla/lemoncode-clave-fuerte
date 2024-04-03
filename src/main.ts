import "./style.css";

interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validar: ValidacionClave = {
    esValida: true,
  };

  return validar;
};
