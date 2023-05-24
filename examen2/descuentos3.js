/*2.Una tienda aplica un descuento del 15% para las compras 
que incluyan más de 10 artículos iguales cuyo precio sea
 superior a 40 euros. Tu programa debe comprobar y calcular la cantidad
  a pagar sabiendo el número de artículos y el precio de cada uno.
  Por ejemplo si compras 20 artículos de 10 euros se te descuenta un 15%
  del total pagarías 20*10 - 20*10*0.15 = 170 eruos.*/

let invoce = [
    {
      id: "001",
      name: "Uvas",
      price: 50,
      cant: 11,
    },
    {
      id: "002",
      name: "Manzanas",
      price: 50,
      cant: 5,
    },
    {
      id: "003",
      name: "Fresas",
      price: 15,
      cant: 15,
    },
  ];
  
  let totInvoice = 0;
  function descuento(price, cant) {
    return price * cant - price * cant * 0.15;
  }
  
  const invoceFinal = invoce.map((product) => {
    if (product.cant > 10 && product.price > 40) {
      product.desc = descuento(product.price, product.cant);
      totInvoice += descuento(product.price, product.cant);
      console.log("descuentos aplicados: " + totInvoice);
    } else {
      console.log("price: " + product.price * product.cant);
      totInvoice += product.price * product.cant;
      product.desc = 0;
      console.log("sin descuento: " + totInvoice);
    }
    return { ...product };
  });
  console.table(invoceFinal);
  console.log(`Total: ${totInvoice} EUR`);
  