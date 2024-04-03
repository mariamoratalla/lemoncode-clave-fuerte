# LABORATORIO CLAVE FUERTE
Con este laboratorio queremos crear un método que valide una serie de condiciones que una clave debe cumplir para que sea segura.

## Criterios de validación
- La clave debe de tener mayúsculas y minúsculas.
- La clave debe de tener números.
- La clave debe de tener caracteres especiales (@,#,+, _, ...).
- La clave debe de tener una longitud mínima de 8 caracteres.
- La clave no debe tener el nombre del usuario.
- La clave no debe de contener palabras comunes.

## ¿Cómo ejecutar el proyecto?

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## Output
Aparece en consola un objeto con dos propiedades:
- `esValida`: indica si la clave es válida (true) o no (false).
- `error`: en caso de que la clave no sea válida, indica cuál es el error.
