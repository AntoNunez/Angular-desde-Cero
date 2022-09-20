/*
    ===== Código de TypeScript =====
*/
export interface Producto {
  descripcion: string;
  precio: number;
}
const telefono: Producto = {
  descripcion: "Nokia 2123",
  precio: 350,
};
const tableta: Producto = {
  descripcion: "Ipad Air",
  precio: 1200,
};

export function calculaIva(productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.19];
}

const articulos = [telefono, tableta];

const [total, iva] = calculaIva(articulos);

/* está comentado para no imprimir al exportar para el ejercicio 7 */

//console.log("El total de ambos articulos es ", total); //El total de ambos articulos es  1550
//console.log("La cantidad de Iva es", iva);//La cantidad de Iva es 294.5
