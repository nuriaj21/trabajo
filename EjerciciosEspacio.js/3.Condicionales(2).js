/*Ejercicio primero
El usuario debe introducir dos valores numéricos por teclado y la aplicación deberá indicar cual es el mayor, el primero o el segundo.*/ 

let num1= Number(prompt("Introduce un número"));
let num2= Number(prompt("Introduce el segundo número"));
let mayor= (num1>num2)? "primer num "+num1:"segundo num "+num2;
alert ("El numero mayor es: El "+ mayor);


/*Ejercicio segundo
El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensaje de acierto en caso contrario dirá que se produjo un error.*/

let numeret, cuadrado,resultando;
numeret= Number(prompt("Introduzca un número"));
cuadrado=Number(prompt("Indique su cuadrado"));
resultando=( Number(cuadrado==numeret*numeret))? "correcto": "error";
alert("El cálculo es: "+mayor);


//Ejercicio tercero

/*Un visitante a la página deberá teclear su edad, si es igual o mayor de 18 recibirá el mensaje de "Entra" en caso contario deberá decirle los años que tiene que esperar para entrar*/

let edad,resultant;
edad=Number(prompt("Introduce tu edad"));
resultant=Number(edad-18);
alert ((resultant>=0)? "Entra" :"Espera "+(-resultant)+" años");

//Ejercicio cuarto

/*En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.*/

let bebida;
let eleccion= prompt("Elija carne, pescado o verdura");
switch (eleccion) {
    case "carne":
       bebida= "¿Desea beber vino tinto?";
        break;
    case "pescado":
       bebida="¿Desea beber vino blanco?";
       break;
    case "verdura":
       bebida= "¿Desea beber agua?";
        break
     default:bebida="Elija carne, pescado o verdura";
        break;
} alert (eleccion+" "+ bebida);

/*Ejercicio cinco
En una sala de juegos existen tres salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.*/

let creditos, acceso;
acceso= " Puede acceder a la sala: "; 
let salas=[" Consolas", " Juegos 2D", " Juegos 3D", " Realidad virtual"];
creditos =Number.parseInt(prompt("Indique el número de Créditos en número\n 4C acceso a todas las salas\n 3C acceso a tres salas\n 2C acceso a dos salas o 1C acceso a una sala"));
 switch (creditos){
     case 1:
        acceso+= salas[0] ;
        break;
     case 2:
        acceso+= salas[0]+","+salas[1];  
        break;
      case 3:
        acceso+=salas[0]+","+salas[1]+", "+salas[2];  
        break;
      case 4:
        acceso+=salas[0]+","+salas[1]+", "+salas[2]+" y de "+salas[3];  
        break;
     
         default : acceso=" No es una opción válida, acuda al encargado";
 }
alert(" "+creditos + acceso);

/* Ejercicio seis

A partir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.

Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,100,11 otoño.*/

 let num, estacion; 
  estacion =" Este número corresponde a: ";
  num =Number(prompt("Introduzca el mes del año"));
    switch (num){
      case 12:
      case  1:
      case  2:
        estacion+= "Invierno";
       break;
      case 3:
      case 4:
      case 5:
         estacion+= "Primavera";
       break;
      case  6:
      case  7:
      case  8:
         estacion+= "Verano";
       break;     
      case  9:
      case 10:
      case 11:
         estacion+= "Otoño"; 
       break; 
         default:
            estacion=" El año tiene doce meses";
         break;    
} alert(num+""+estacion);

/*Ejercicio siete
En este ejercicio el usuario entra la longitud de la base y el alto de un cuadrado. Si la base y el alto son idénticos la respuesta será "Es un cuadrado", si la base es mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".*/

let base, alto, solucion;
base=Number(prompt("Indique la base "));
alto=Number(prompt("Indique la altura "));
 solucion=(base==alto)? "Es un cuadrado":"Es un rectangulo";
 alert(solucion);

/*Ejercicio ocho
En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo al tipo de coche que elija. Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficia 200 y si elige electrico o 3 se le enviará a la ofician 300.*/

let combustible, respuesta;
combustible = prompt("Elija que combustible desea:\n 1.Gasolina\n 2.Diesel\n 3.Electrico");
respuesta=" Dirijase a la oficina nº: ";
switch(combustible){
    case "gasolina":
             case "1": 
     respuesta+="100";
         break;
    case "diesel":
          case "2" :
      respuesta+="200";
         break;
    case "electrico":
              case "3":
         respuesta+= "300";
         break;
         default:
            respuesta= "Lo sentimos no tenemos el producto que necesita";     
}
alert(respuesta);
  

/*Ejercicio nueve
Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 400 euros le descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15% */

 let compra, total;
 compra = Number(prompt("Ingrese el importe de su compra"));
 
 switch(true) {
   case compra <=100:
     total = compra*0;
     break;
   case compra >100 && compra <= 300:
     total= compra * 0.05;
     break;
   case compra > 300 && compra <= 400:
     total= compra * 0.10;
     break;
   case compra > 400:
     total= compra * 0.15;
     break;
   default:
     total = "El importe no es correcto";
     break;
 }
   console.log(compra - total);

 

/*Ejercicio 10
En este ejercicio el script convertirá las notas numéricas de un examen en palabras: 0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente.*/

let resultado,nota;
 resultant=Number(prompt("Nota obtenida"));
 switch (true){
      case resultant >=0 && resultant<5:
          nota="Suspendido";
        break;
      case resultant >=5 && resultant<7:
          nota="Aprobado";
        break;
      case resultant >=7 && resultant<9:
          nota="Notable";
        break;
      case  resultant >=9 && resultant<=10:
          nota="Sobresaliente";
        break;
} alert("Ha obtenido un: "+nota);




































