
/* primer ejercicio
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.*/


 const precio =Number(prompt("introduzca el precio del artículo"));
 const iva =21;
 var preciototal = precio + precio * iva /100;
 
 alert (" el precio total es: " + preciototal.toFixed(2));
 
 /*Segundo ejercicio
 En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.*/

 var lado = 40;
 var area = (lado)**2;
 var perimetro =(lado+lado+lado+lado);
 
 console.log ("El area es:",+ area);
 alert("El perimetro es:"+ perimetro);
    
/*Tercer ejercicio  
Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.*/

  var saludo = prompt("Escribe tu nombre");
 
  console.log ( "Hola "+ saludo);

/*Cuarto ejercicio
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.*/

var primerValor =parseInt(prompt("Introduce el primer valor"));
var segundoValor =parseInt(prompt("Introduce el segundo valor"));
var tercerValor =parseInt(prompt("Introduce el tercer valor"));
var mediaDeTres= Number(primerValor + segundoValor + tercerValor) / 3;

console.log("La media de los números introducidos es :", mediaDeTres );

/*Quinto ejercicio
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche, luego le pide el número de kilómetros recorridos. El script debe mostrar el consumo de combustible por kilómetro.*/

let litros= parseInt(prompt("Introduce numero de litros"));
let kilometros = parseFloat(prompt("Introduce numero de kilometros"));
let consumo= Number(litros /kilometros);
console.log ("Has consumido:",+ consumo +"l/Km");

/*Sexto ejercicio
Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 6o minutos y cada minuto son 60 segundos.*/

let horas = 2;
let min = 30;
let totalMinutos= horas*60 + min;
let totalSegundos= totalMinutos * 60;

console.log ("El resultado es:",+totalSegundos+" s.");

/*Septimo ejercicio
En este script debes pedir al usuario un programa de dos dígitos y debes devolver el número de unidades y de decenas, o sea, cada dígito del número.*/

var introNum = parseInt(prompt("Introduzca dos dígitos"));

console.log("Unidades "+ introNum %10+", Decenas "+ parseInt(introNum/10));

/*Octavo ejercicio
Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias*/

const  personas = Number(prompt("¿Para cuantos vas a cocinar?"))
var patatas = (200/1000)* personas;
var huevos=  5*patatas;
var cebollas= 300/1000*patatas;
console.log ("Necesitas "+patatas+" kg. de patatas");
console.log (huevos+" huevos medianos");
console.log (cebollas+"kg. de cebolla");

/*Noveno ejercicio
Tienes que escribir un programa que intercambie el valor de dos variables. Al final la primera variable debe tener el valor de la segudna y la segunda el valor de la primera.*/

 var varUno = 10;
 var varDos = 30;
 var antes = varUno;
  varUno = varDos;
  varDos= antes;
  console.log (varUno+ " y "+ varDos);

  /*Décimo ejercicio
  No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales.*/
  
  var dimeUnNumber = Number(prompt("Indicame un número entero"));
     alert("¿Es par? "+ (dimeUnNumber %2 === 0));

        

  

 

               
        





