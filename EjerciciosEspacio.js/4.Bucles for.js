/* Ejercicio primero
Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.   */


let numTecleado, contar, numer='' ;
numTecleado=parseInt(prompt("Teclee un número entero "));
 for(contar = 0; contar<numTecleado; contar++)
 {
   numer += contar + "," ;
}
numer += contar;
alert(numer);

/*Ejercicio segundo
Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0.*/

let muestra, contar, rescues="";
muestra=parseInt(prompt ("Introduce un numero entero"));
for (contar = muestra; contar>0 ; contar--){
rescues += contar+",";
}
rescues +=contar;
alert(rescues);

/*Ejercicio tercero
Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').*/

let lista, tecleado, pares=0,mensaje=" ";

tecleado=parseInt(prompt("teclee un número entero"))
for(lista=1; pares<tecleado ;lista++){
 mensaje += pares +"\n";
 pares =lista*2;

}alert(mensaje);


/* Ejercicio cuarto

Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

Recuerda que el salto de linea es el carácter "\n"*/

let num , multiplico=0, solucion="";
num=parseInt(prompt("Teclee el numero que desea multiplicar"));
for (multiplico=0;multiplico<=10;multiplico++){
  
  solucion += multiplico*num+"="+num+"x"+multiplico+"\n";
  }
alert("Tabla del numero "+num+":\n"+solucion);


/*Ejercicio cinco 

En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0. */

let num, resultado=0;
num=parseInt(prompt("Ingresa un número entero"));
for (resultado=0;resultado<num ;resultado++){ 
  if(resultado%3==2){
   console.log(resultado);
  }
}

/*Ejercicio seis
Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado*/

let letra, numer, resto;

let letra=" ", numer=0, resto=" ";
letra = prompt("teclee una letra");
numer = parseInt(prompt("Introduzca un numero"));
for(i=0;i<numer;i++){
  resto += letra +"\n"
}alert(resto);

/*Ejercicio siete
Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4*/
let a,b;
a=0 ;
b=0;
for(a=0;a<2;a++){
  for(b=0;b<5;b++){
    console.log(a+ ":"+b);
  } 
}
/*Ejercicio ocho

Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.*/
  
let alto, ancho,  linea, cadena;
alto = parseInt(prompt("Teclea un número de 1 a 10"));
for ( linea = 0; linea < alto; linea++){
     cadena=''
     for(ancho = 0; ancho <= linea; ancho++){
         cadena += "*";
        }
     console.log( cadena+ "\n");
}

/*Ejercicio nueve

Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la form

a "Los números enteros de 0 a n  suman suma"*/

let numIntro, suma=0;
numIntro=parseInt(prompt("Indique un numero entero"));
for (let i=0; i<=numIntro; i++){
  suma +=i;
      }
      alert("Los números enteros de 0 a "+numIntro+"  suman " + suma);



/*Ejercicio diez
Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4*/

let num1,num2, suma=0, total=0;
for(num1=0;num1<4;num1++){
num2=parseInt(prompt("introduzca un nº para realizar la media"));
total+=num2;
}
suma=total/4;
alert("La media es "+ suma);
