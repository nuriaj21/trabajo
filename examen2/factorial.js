function factorial(num) {
    // Paso 1. Crea una variable resultado que guarda num
    var result = num;
     
    // Si num = 0 || o num = 1, el factorial devolverá 1
    if (num === 0 || num === 1) 
      return 1; 
   
    // Paso 2. Crea un bucle WHILE
    while (num > 1) { 
      num--; // decremenatamos num en cada interaccion
      result *= num; // realizamos la operacion de num por result
     }
       
    // Paso 3. Retornamos el factotial que es result
    return result; // 120
  }
  factorial(5);

  function esPar(valor) {
    return valor % 2 == 0 ? true : false;
}

  function factorial(num) {
    return num >= 0 ? (num * factorial(num - 1))
    : num < 0 ? alert("Numero negativo sin Factorial");
  }
  factorial(5);