/*1.Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15%*/

let compra,descuento,totalPagar;

 compra = Number(prompt("Introduce el importe de la compra"));
 if(compra<100){
    descuento = compra*0;
 }else if(compra >= 100 && compra < 300){
    descuento = compra*0.05;
 }else if(compra >= 300 && compra < 500){
    descuento = compra*0.10;
 }else if(compra >= 500){
    descuento = compra*0.15;
} totalPagar = compra - descuento;

alert ("El importe de su compra es: "+compra+" euros\n"+ "El descuento aplicado es: " +descuento +" euros\n"+"El importe a pagar es: " + totalPagar + " euros\n" + "GRACIAS POR SU COMPRA")
 
________________

/*2.Sumar los números del 1 al 100. Sumar con condiciones, solo los pares, solos los impares.
El bucle debe poder sumar a cualquier n que se le indique.*/

let suma, par, impar,todo;

function sumarNumeros(n, opcion){
    suma = 0;
    par = 0;
    impar = 0;
    todo = 0;
    for(let i=1; i<=n; i++){
        suma += i;
        if(i%2==0){
            par += i;
        }else{
            impar += i;
        }
    }
    if(opcion == 'todos'){
        todo = suma;
    }else if(opcion == 'pares'){
        todo = par;
    }else if(opcion == 'impares'){
        todo = impar;
    }
    return todo;
}
    
  // Sumar los números del 1 al 100
  console.log('Suma de todos los números del 1 al 100:', sumarNumeros(100, 'todos'));
  
  // Sumar solo los números pares del 1 al 100
  console.log('Suma de los números pares del 1 al 100:', sumarNumeros(100, 'pares'));
  
  // Sumar solo los números impares del 1 al 100
  console.log('Suma de los números impares del 1 al 100:', sumarNumeros(100, 'impares'));
  
  // Sumar 'todos' los números, hasta el 'n'que te indique
  console.log('Suma de todos los números :', sumarNumeros(n, 'todos'));
  
_______________________________


/*3. Calcular el factorial de un número. Ya sea por recursividad o por bucle*/

/*recursivo:*/

const numero = prompt('Introduce un número para calcular su factorial');
function factorialRecursivo(n) {
   if (n < 0) {
     alert("Error: El número debe ser mayor o igual a cero.");
     return -1;
   }
   if (n === 0) {
     return 1;
   }
   return n * factorialRecursivo(n - 1);
 }
let factorial = factorialRecursivo(numero);
alert("Factorial de "+ numero+ " es "+ factorial);

/* El mismo ejercicio en bucle:*/

function factorialBucle(n) {
   let factorial = 1;
 
   for (let i = 1; i <= n; i++) {
       factorial *= i;
   }
    return factorial;
 }



/*12. Hacer una clase `Cuenta` con métodos para `ingresar`, `retirar` `dinero`, `verSaldo`, `imprimir` comprobante.*/
/*13. Vídeo en reproducción. Pausar con un clic en <button>, <body>, <div>, etc.*/