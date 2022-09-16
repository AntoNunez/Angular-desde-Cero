/*
    ===== Código de TypeScript =====
*/
function sumar(a: number, b: number): number {
  return a + b;
}

const sumarArrow = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}
/* const resultado = multiplicar(5, 0, 10);
console.log(resultado);
 */
///////
interface PersonajeLOR {
  nombre: string;
  vida: number;
  mostrarVida: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.vida += curarX;
}
const nuevoPersonaje: PersonajeLOR = {
  nombre: "Anto",
  vida: 400,
  mostrarVida() {
    console.log(this.nombre, "=", "puntos de vida", this.vida); //Anto = puntos de vida 430//
  },
};
curar(nuevoPersonaje, 30);
nuevoPersonaje.mostrarVida();
