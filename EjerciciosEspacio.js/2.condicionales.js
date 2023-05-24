/*Primer Ejercicio
Se trata de escribir un script que diga si un número es par o es impar.Se trata de escribir un script que diga si un número es par o es impar.*/

var dimeUnNumber = Number(prompt("Indicame un número entero"));
   if( dimeUnNumber%2==0){
    alert ("El número "+ dimeUnNumber+" es par");
   }else{ alert("El numero "dimeUnNumber+ " Es impar")}

   /*Segundo Ejercicio
 Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo*/

var esNumber = Number(prompt("Introduce un número"));
if(Number(esNumber>=0)){
    console.log ("El num "+ esNumber+" es positivo")
}else(console.log("El numero"+  esNumber+" es negativo"));

/*Tercer Ejercicio
En este ejercicio debes pedri dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error*/

var num = Number(prompt("Introduce un num <= 1"));
var num2 = Number(prompt("Introduce un num < 0"))
var num3 = num/num2;
if(num==0){
    alert("Con el numero 0 no se puede realizar la operación")
}else(console.log (num3+" Es el resultado de la división"));

/*Cuarto Ejercicio
Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...*/

var letraIntroducida =prompt ("Introduzca una letra");
var letras= ["A", "a", "B", "b", "C", "c", "D", "d"];

if (letras.includes(letraIntroducida)){
    console.log ("Usted ha acertado");
} else{
    console.log ("Lo siento, otra vez acertará");
};
//Si solo es la letra A ||a
var letra=(prompt("Introduce una letra A, B, C, D"));
if (letra =="A"||letra=="a"){
    alert("Usted ha acertado")
} else {
    alert("Otra vez será..")
};

/*Quinto ejercicio
En este ejemplo el usuario entrará dos números. Debe devvolver la diferencia entre el mayor y el menor*/

var minuendo = Number(prompt("Introduce un número"));
var sustraendo=Number(prompt("introduce el 2ª núm y te devolveré la diferencia"));

if(minuendo>=sustraendo){
    var  resultado1 = Number(minuendo-sustraendo);
     alert("la diferencia es: "+ resultado1);
}else if(
    alert("la diferencia es: "+ Number(sustraendo-minuendo))
);

/*Sexto ejercicio
Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.*/

var alcohol=[" vino ", " cerveza "," refresco "," agua "];
var cliente= prompt("Que desea tomar"+alcohol+" indique una.");
if (cliente=="vino"||cliente=="cerveza"){
    alert (" Dirijase a la barra su "+cliente+" le está esperando");
} else (alert("Dirijase a la tienda le espera su : "+cliente));

/*Septimo ejercicio
Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. Si va en tren o autobus le recordará que lleve dinero para el billete.*/

var viajar= (prompt("¿Cómo se desplazará en coche, tren, autobus o bicicleta? "))
if (viajar=="tren"){
    alert(" No olvide llevar dinero para el billete")
} else (alert("Buen viaje"));

/*Octavo ejercicio
 En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.*/

var kilometros = Number(prompt("¿Cuántos km ha recorrido?"));
var tiempo  =  Number(prompt("¿Cuánto tiempo en horas ha empleado?"));
var media= kilometros / tiempo;
if ( media>=40 && media<=60){
    alert("Es apto su velocidad ha sido de: " +parseInt(media)+"Km/h") 
}else(alert("Está descalificado su velocidad ha sido de : "+ parseInt(media)+"km/h"));

/* Noveno ejercicio
Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.*/

var compra = prompt("¿Cuántos artículos ha comprado?");
var precio = prompt ("¿Cuánto ha pagado por cada artículo?");
var total= precio* compra;
if (compra>10 && (precio*compra)>40){
         alert("Importe " +total+" €, descuento del 15% "+ (total-= total*0.15) +" €");
}else(alert("No tiene , importe total" +total+"€"));

/*Decimo ejercicio
Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7.*/


let nota1 =Number(prompt("introduce la nota del primer trimestre"));
let nota2=Number(prompt("introduce la nota del segundo trimestre"));
let nota3= Number(prompt("introduce la nota del tercer trimestre"));
let media=Number(nota1+ nota2+ nota3)/3;
let nota=" ";
if (media == 5) {
  media=" Aprobado"
  } else if( media>5 && media <=7 ){
      nota= " Notable";
}else if (media<5){
   nota= " suspendido";
 }
 media= media.toFixed(1);
alert(media +" Usted está : " + nota);



