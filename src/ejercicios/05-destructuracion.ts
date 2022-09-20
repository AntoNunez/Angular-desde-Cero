/*
    ===== Código de TypeScript =====
*/

/* Destructuracion de objetos */

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 50,
  segundo: 11,
  cancion: "El Chupacabras",
  detalles: {
    autor: "Tiro de Gracia",
    anio: 1995,
  },
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

//console.log("El volumen actual es de:", volumen); //El volumen actual es de: 50
//console.log("El segundo actual es:", segundo); //El volumen actual es de: 50
//console.log("La cancion actual es:", cancion); //La cancion actual es: El Chupacabras
//console.log("El autor es:", autor); //El autor es: Tiro de Gracia

/* Destructuracion de Arreglos */

const frutas: string[] = ["Melon", "Manzana", "Pera"];
const [, , p3] = frutas;
console.log("La fruta 3 es", p3);
