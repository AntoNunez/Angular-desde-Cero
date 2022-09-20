/*
    ===== Código de TypeScript =====
*/
function ClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@ClassDecorator
class miSuperClase {
  public miPropiedad: string = "ABC123";

  imprimir() {
    console.log("Hola Mundo");
  }
}
console.log(miSuperClase);

const miClase = new miSuperClase();
console.log(miClase.miPropiedad); //ABC123
