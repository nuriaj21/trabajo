/*4.Sumar los números del 1 al 100. Sumar con condiciones, 
solo los pares, solos los impares.
El bucle debe poder sumar a cualquier n que se le indique.*/
/*
5 impares
1+0
1+ 3 = 4
4 + 5 = 9*/
let pares = 0;
let impares = 0;
let num = prompt("Introduzca un número")
        
        for( let i = 1; i <= num; i++){
            if (i % 2 == 0){
                pares += i;
            } else {
                impares += i;
               }
       
        }
   console.log(`Suma de Pares: ${pares} Suma de impares: ${impares} `);


   /*Con funciones*/

   function sumarNum(num, opc){
    let suma = 0;
    if (opc == 'pares'){
        for(let i = 1; i<= num; i++){
            if (i % 2 == 0){
                suma += i;
                console.log(`Pares de ${suma}`);
        } 
       }
   }
   if(opc == 'impares'){
    for(let i = 1; i<= num; i++){
        if(i % 2 != 0){
            suma += i;
            console.log(`Impares: ${suma}`);
        }
    }
}
return suma;
}
