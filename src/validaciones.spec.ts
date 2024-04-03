import {
  tieneMayusculas,
  tieneMayusculasYMinusculas,
  tieneMinusculas,
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

  it("debería devolver false si la clave solo tiene minúsculas", () => {
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
