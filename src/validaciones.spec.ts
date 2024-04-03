import {
  tieneCaracteresEspeciales,
  tieneElNombreDeUsuario,
  tieneLongitudMinimaOchoCaracteres,
  tieneMayusculas,
  tieneMayusculasYMinusculas,
  tieneMinusculas,
  tieneNumeros,
  tienePalabrasComunes,
} from "./validaciones";

describe("tieneMayusculas", () => {
  it("debería devolver true porque la clave tiene mayúsculas", () => {
    // Arrange
    const clave = "Maria";
    // Act
    const resultado = tieneMayusculas(clave);
    // Assert
    expect(resultado).toBeTruthy();
  });

  it("debería devolver false porque la clave no tiene mayúsculas", () => {
    // Arrange
    const clave = "maria";
    // Act
    const resultado = tieneMayusculas(clave);
    // Assert
    expect(resultado).toBeFalsy();
  });
});

describe("tieneMinusculas", () => {
  it("debería devolver true porque la clave tiene minúsculas", () => {
    // Arrange
    const clave = "Maria";
    // Act
    const resultado = tieneMinusculas(clave);
    // Assert
    expect(resultado).toBeTruthy();
  });

  it("debería devolver false si la clave no tiene minúsculas", () => {
    // Arrange
    const clave = "MARIA";
    // Act
    const resultado = tieneMinusculas(clave);
    // Assert
    expect(resultado).toBeFalsy();
  });
});

describe("tieneMayusculasYMinusculas", () => {
  it("debería devolver true si la clave tiene mayúsculas y minúsculas", () => {
    // Arrange
    const clave = "Maria";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado).toBeTruthy();
  });

  it("debería devolver un mens si la clave solo tiene minúsculas", () => {
    // Arrange
    const clave = "maria";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado).toBeFalsy();
  });

  it("debería devolver false si la clave solo tiene mayúsculas", () => {
    // Arrange
    const clave = "MARIA";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado).toBeFalsy();
  });
});

describe("tieneNumeros", () => {
  it("devuelve true si la clave contiene números", () => {
    // Arrange
    const clave = "Maria123";
    // Act
    const resultado = tieneNumeros(clave);
    // Assert
    expect(resultado).toBeTruthy();
  });

  it("devuelve false si la clave no contiene números", () => {
    // Arrange
    const clave = "Maria";
    // Act
    const resultado = tieneNumeros(clave);
    // Assert
    expect(resultado).toBeFalsy();
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("devuelve true si la clave contiene carácteres especiales", () => {
    // Arrange
    const clave = "Maria123*/";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    // Assert
    expect(resultado).toBeTruthy();
  });

  it("devuelve false si la clave no contiene caracteres especiales", () => {
    // Arrange
    const clave = "Maria";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    // Assert
    expect(resultado).toBeFalsy();
  });
});

describe("tieneLongitudMinimaOchoCaracteres", () => {
  it("devuelve true si la clave tiene 8 caracteres", () => {
    // Arrange
    const clave = "Mari123*";
    // Act
    const resultado = tieneLongitudMinimaOchoCaracteres(clave);
    // Assert
    expect(resultado).toBeTruthy();
  });

  it("devuelve true si la clave tiene más de 8 caracteres", () => {
    // Arrange
    const clave = "Mariaa123*";
    // Act
    const resultado = tieneLongitudMinimaOchoCaracteres(clave);
    // Assert
    expect(resultado).toBeTruthy();
  });

  it("devuelve false si la clave tiene menos de 8 caracteres", () => {
    // Arrange
    const clave = "Mar123*";
    // Act
    const resultado = tieneLongitudMinimaOchoCaracteres(clave);
    // Assert
    expect(resultado).toBeFalsy();
  });
});

describe("tieneElNombreDeUsuario", () => {
  it("devuelve true si la clave contiene el nombre de usuario", () => {
    // Arrange
    const clave = "123MariaRubio123";
    const nombreUsuario = "MariaRubio";
    // Act
    const resultado = tieneElNombreDeUsuario(clave, nombreUsuario);
    // Assert
    expect(resultado).toBeTruthy();
  });

  it("devuelve true si la clave contiene el nombre de usuario", () => {
    // Arrange
    const clave = "123MariaRubio123";
    const nombreUsuario = "mariarubio";
    // Act
    const resultado = tieneElNombreDeUsuario(clave, nombreUsuario);
    // Assert
    expect(resultado).toBeTruthy();
  });

  it("devuelve false si la clave no contiene el nombre de usuario", () => {
    // Arrange
    const clave = "123Maria123";
    const nombreUsuario = "MariaRubio";
    // Act
    const resultado = tieneElNombreDeUsuario(clave, nombreUsuario);
    // Assert
    expect(resultado).toBeFalsy();
  });
});

describe("tienePalabrasComunes", () => {
  it("devuelve true si la clave es alguna de las claves comunes", () => {
    // Arrange
    const clavesComunes: string[] = ["welcome", "monkey", "sunshine"];
    const clave = "welcome";
    // Act
    const resultado = tienePalabrasComunes(clave, clavesComunes);
    // Assert
    expect(resultado).toBeTruthy();
  });

  it("devuelve false si la clave no es alguna de las claves comunes", () => {
    // Arrange
    const clavesComunes: string[] = ["welcome", "monkey", "sunshine"];
    const clave = "hola";
    // Act
    const resultado = tienePalabrasComunes(clave, clavesComunes);
    // Assert
    expect(resultado).toBeFalsy();
  });
});
