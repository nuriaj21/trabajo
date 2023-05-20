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

alertalert ("El importe de su compra es: "+compra+" euros\n"+ "El descuento aplicado es: " +descuento +" euros\n"+"El importe a pagar es: " + totalPagar + " euros\n" + "GRACIAS POR SU COMPRA")
 
________________

/*2.Sumar los números del 1 al 100. Sumar con condiciones, solo los pares, solos los impares.
El bucle debe poder sumar a cualquier n que se le indique.*/

let num, suma, par, impar;

for(let i = 1; i <= 100; i++){
     if(i%2 == 0){
        par = par + i;
     }else{
        impar = impar + i;
     }








/*8. Calcular el factorial de un número. Ya sea por recursividad o por bucle*/
/*12. Hacer una clase `Cuenta` con métodos para `ingresar`, `retirar` `dinero`, `verSaldo`, `imprimir` comprobante.*/
/*13. Vídeo en reproducción. Pausar con un clic en <button>, <body>, <div>, etc.*/