Entran:
- 3  ✅ Ej. condicional, descuentos
- 4  ✅ Ej. for para sumar
- 8  ✅ Ej. factorial
- 12 ✅ Ej. clase MiCuenta (un poco largo)
- 13 ✅ Ej. vídeo

/*1.Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.
Tienes que escribir un programa que intercambie el valor de dos variables. Al final la primera variable debe tener el valor de la segunda y la segunda el valor de la primera.
*/

const num1 = 123;
const num2 = 892;
let num3 = num1;
console.log(num1 + "es distinto que:" + num2);
num1 = num2;
num2 = num3;
console.log( num1 +"ahora es"+ num2);


/*2.Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.*/

let numArticulos = Number(prompt("Indique número de artículos"));
let importeArticulo = Number(prompt("Indique el precio del articulo"));
let importeNeto = importeArticulo * numArticulos;
let porcentaje = 0.15;
if (numArticulos >=10 && importeArticulo >40){
    let descuento = importeNeto * porcentaje;
        descuento = descuento.toFixed(2);
    let total = importeNeto-descuento;
    console.log("Importe total " + importeNeto+" euros\n" + "Descuento aplicado: " + descuento + " euros\n" + "Total a pagar: "+ total +" euros");
}else{ 
    console.log("No tiene descuento: " + importeNeto + " euros")
};



/*3.Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15%*/


let valorCompra, descuento, total;
valorCompra = Number(prompt("Indique el valor de su compra"));
switch (true){
    case   valorCompra<100:
          descuento = valorCompra *0;
       break;
    case  valorCompra>=100 && valorCompra<=300:
          descuento = valorCompra * 0.05;
       break
    case  valorCompra >300 && valorCompra <= 500:
          descuento = valorCompra * 0.10;
        break;
    case  valorCompra >500:
        descuento = valorCompra * 0.15;
        break;
       } total = valorCompra -descuento;
   alert ("El importe de su compra es: "+valorCompra+" euros\n"+ "El descuento aplicado es: " +descuento +" euros\n"+"El importe a pagar es: " + total + " euros\n" + "GRACIAS POR SU COMPRA");



/*4.Sumar los números del 1 al 100. Sumar con condiciones, solo los pares, solos los impares.
El bucle debe poder sumar a cualquier n que se le indique.*/

let  todos, pares, imPares;

function sumarNumeros(n, opcion) {
    let suma = 0;
  
    if (opcion === 'todos') {
      for (let i = 1; i <= n; i++) {
        suma += i;
      }
    } else if (opcion === 'pares') {
      for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
          suma += i;
        }
      }
    } else if (opcion === 'impares') {
      for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
          suma += i;
        }
      }
    }
     return suma;
  }
  
  // Sumar los números del 1 al 100
  console.log('Suma de todos los números del 1 al 100:', sumarNumeros(100, 'todos'));
  
  // Sumar solo los números pares del 1 al 100
  console.log('Suma de los números pares del 1 al 100:', sumarNumeros(100, 'pares'));
  
  // Sumar solo los números impares del 1 al 100
  console.log('Suma de los números impares del 1 al 100:', sumarNumeros(100, 'impares'));
  
  // Sumar 'todos' los números, hasta el 'n'que te indique
  console.log('Suma de todos los números :', sumarNumeros(n, 'todos'));
  


/*8. Calcular el factorial de un número. Ya sea por recursividad o por bucle*/

function factorialRecursivo(n) {
      if (n === 0) {
       return 1;    // Condición base: factorial de 0 es 1( porque al multiplicar*0 daría 0; por eso lo cambio por el 1)
  } return n * factorialRecursivo(n - 1);
}// Llamada recursiva: factorial de n es n multiplicado por el factorial de n-1. Al numero que me dan le voy restando 1 hasta llegar a 0 y cada numero lo multiplico por el resultado que voy obteniendo.

  // Ejemplo:
const numero = 5;   /* le doy un valor a n */
/*creo una variable la llamo factorial y "llamo" a la funcion de arriba" fatorialRecursivo" y le doy el parametro "numero" que le he dado el valor 5*/
const factorial = factorialRecursivo(numero);
/*ahora se ejecuta la function así el n(5)se multiplica(n-1)será (5-1)(4-1)....
5x4=20
20x3=60
60x2=120
120x1=60
ahora tocaría 120x0 pero como de base le hemos dicho que cuando n===0; return 1, o sea que cambie el 0 por un 1, haremos 120x1=120; así que el factorial de 5 =120;*/
console.log(`El factorial de ${numero} es: ${factorial}`);



/*El mismo En bucle:*/

function factorialBucle(n) {
    let factorial = 1;
  
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
     return factorial;
  }
  // Ejemplo :
  const numero = 5;
  const factorial = factorialBucle(numero);
  console.log(`El factorial de ${numero} es: ${factorial}`);
  

/*12. Hacer una clase `Cuenta` con métodos para `ingresar`, `retirar` `dinero`, `verSaldo`, `imprimir` comprobante.*/
class Cuenta {
    constructor(nombre,dni, email, telefono, contraseña) {
      this.nombre = nombre;
      this.dni = dni;
      this.email = email;
      this.telefono = telefono;
      this.contraseña = contraseña;
      this.saldo = 0;
    }
  
    ingresar(cantidad) {
      if (cantidad >= 0) {
        this.saldo += cantidad;
        console.log(`Se han ingresado ${cantidad} euros.`);
      } else {
        console.log('La cantidad ingresada debe ser mayor a cero.');
      }
    }
  
    retirar(cantidad) {
      if (cantidad > 0) {
        if (cantidad <= this.saldo) {
          this.saldo -= cantidad;
          console.log(`Se han retirado ${cantidad} euros.`);
        } else {
          console.log('Saldo insuficiente para realizar el reintegro.');
        }
      } else {
        console.log('La cantidad a retirar debe ser mayor a cero.');
      }
    }
  
    verSaldo() {
      console.log(`Saldo actual: ${this.saldo} euros.`);
    }
  
    imprimirComprobante() {
      console.log('Comprobante:');
      console.log('-------------------------');
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Saldo: ${this.saldo} euros`);
      console.log('-------------------------');
    }
  }
  
  // Ejemplo:
  const miCuenta = new Cuenta('Nuria Justo','43458062J', 'nuriaj21@example.com', '123456789', 'contraseña123');
  
  miCuenta.ingresar(10000);
  miCuenta.retirar(500);
  miCuenta.verSaldo();
  miCuenta.imprimirComprobante();
  

/*13. Vídeo en reproducción. Pausar con un clic en <button>, <body>, <div>, etc.*/

```html
  <h1>Video</h1>
  <video id="video" src="video.mp4" autoplay muted loop width="auto" height="500"></video>
  <br>
  <button onclick="pausarVideo()">Pausar vídeo</button> 
```

```javascript
  function pausarVideo() {
    const video = document.getElementById("video");
    video.pause();
    console.log("El vídeo está pausado");
  }
```





