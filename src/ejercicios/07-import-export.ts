import { Producto, calculaIva } from "./06-destruct funciones";

/*
    ===== Código de TypeScript =====
*/
const carritoCompras: Producto[] = [
  {
    descripcion: "Telefono 1",
    precio: 1000,
  },
  {
    descripcion: "Telefono 2",
    precio: 2000,
  },
];

const [total, iva] = calculaIva(carritoCompras);
console.log("El total de los articulos es:", total);
console.log("El Iva es:", iva);
