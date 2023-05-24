/************************/
//1.
let descuento,totalPagar;
 //compra = Number(prompt("Introduce el importe de la compra"));
 function descuento(compra){
    if(compra<100){
        descuento = 0
     }else if(compra >= 100 && compra < 300){
        descuento = compra*0.05;
     }else if(compra >= 300 && compra < 500){
        descuento = compra*0.10;
     }else if(compra >= 500){
        descuento = compra*0.15;
    } 
     totalPagar = compra - descuento;
     return totalPagar;
 }
descuento(200);
/**************************************************************/
//2. Sumar Pares, impares y todos, apartir de un número 
function sumarNum(num, opc){
    let suma = 0;
    if (opc == 'pares'){
        for(let i = 1; i<= num; i++){
            if (i % 2 == 0){
                suma += i;
             //   console.log(`Pares de ${suma}`);
        } 
       }
   }
   if(opc == 'impares'){
    for(let i = 1; i<= num; i++){
        if(i % 2 != 0){
            suma += i;
           // console.log(`Impares: ${suma}`);
        }
    }
}
    if(opc == 'todos'){
        for(let i = 1; i<= num; i++){
                suma += i;
               // console.log(`Todos: ${suma}`);
            
        }
    }
return suma;
}
/**************************************************************/

/**************************************************************/
//3. Factorial 
function factorial(num) {
    if (num < 0) {
        console.log("Debe ser un número positivo");
    }
    else if (num == 0 || num == 1) {
        return 1;

    }
    else {
        return (num * factorial(num - 1));
    }
  }
  factorial(5);
  /************************************************************/
  /*$ calse cuenta y metodos*/
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
  const miCuenta = new Cuenta('Milagros Negrín','Q1568458Y', 'mila@gmail.com', '123', '12345');
  
  miCuenta.ingresar(1555);
  miCuenta.retirar(205);
  miCuenta.verSaldo();
  miCuenta.imprimirComprobante();
  

  /**************************************************************/
  /* 5 Video */
 /* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function pausarVideo() {
            const video = document.getElementById("video");
            video.pause();
            console.log("El vídeo está pausado");
        }
    </script>
</head>
<body>
    <h1>Video</h1>
    <video id="video" src="video.mp4" autoplay muted loop width="auto" height="500"></video>
    <br>
    <button onclick="pausarVideo()">Pausar vídeo</button>
</body>
</html>
*/