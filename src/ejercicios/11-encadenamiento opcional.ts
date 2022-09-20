/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
  nombre: string;
  hijos?: string[];
}
const pasajero1: Pasajero = {
  nombre: "Anto",
};
const pasajero2: Pasajero = {
  nombre: "Marioly",
  hijos: ["Julieta", "Ringo"],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0; //si es undefined o null retorne 0
  console.log(cuantosHijos);
}
imprimeHijos(pasajero2);
imprimeHijos(pasajero1);
