// 1. Definir una variable numerica, asignrle un valor y sumarle 5
let numero = 10;
numero = numero + 5;
console.log(numero);

// 2. Definir dos variables de cadenas, asignarles un valor y concatenarlas
let cadena1 = "Hola";
let cadena2 = "Mundo";
let cadena3 = cadena1 + " " + cadena2;
console.log(cadena3);

// 3. Evaluar si dos números son iguales, diferentes, mayor o menor. Resolver utilizando if/else
let num1 = 5;
let num2 = 8;

if (num1 == num2) {
  console.log("Los números son iguales");
} else if (num1 < num2) {
  console.log("El primer número es menor que el segundo");
} else {
  console.log("El primer número es mayor que el segundo");
}

// 4. Utilizando "switch". Definir una variable numérica. asignarle un valor entre 1 y 10; mostrar a que grupo pertenece
let numeroGrupo = parseInt(prompt("Introduce un número entre 1 y 10:"));
switch (numeroGrupo) {
  case 1:
  case 2:
  case 3:
    console.log("El número pertenece al grupo 1-3");
    break;
  case 4:
  case 5:
  case 6:
    console.log("El número pertenece al grupo 4-6");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("El número pertenece al grupo 7-10");
    break;
  default:
    console.log("Número fuera de rango");
}

// 5. Realizar la sumatoria de los números del 0 al 10 utilizando un bucle
let numBucle = 0;
for (let i = 0; i <= 10; i++) {
  numBucle += i;
}
console.log(numBucle);

// 6. Generar un array con 10 números, recorrerlo e ir multiplicando todos los elementos,finalmente obtener el producto total
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let productoTotal = 1;
for (let i = 0; i < numeros.length; i++) {
  productoTotal *= numeros[i];
}
console.log("El producto total es: " + productoTotal);

// 7. Crea una funcion que reciba dos valores y retorne el producto de ambos
function productoValores(valor1, valor2) {
  return valor1 * valor2;
}

let resultado = productoValores(3, 4);
console.log(resultado);

// 8. Crear una función que reciba dos cadenas y retorne la concatenación de la misma
function concatenarCadenas(cadenaA, cadenaB) {
  return cadenaA + " " + cadenaB;
}

let resultadoCadenas = concatenarCadenas("Hola", "Me llamo Franco");
console.log(resultadoCadenas);

// 9. Crear una funcion, a partir de la logica aplicada en el ejercicio 3, que reciba dos valores y muestre cual es el mayor. En caso de ser iguales indicarlo.
function numMayor(numero1, numero2) {
  if (numero1 == numero2) {
    return "Los números son iguales";
  } else if (numero1 > numero2) {
    return `El numero 1:  ${numero1}  Es mayor al numero 2: ${numero2}`;
  } else {
    return `El numero 2: ${numero2}  Es mayor al numero 1: ${numero1}`;
  }
}
let n1 = parseInt(prompt("Ingrese el primer número:"));
let n2 = parseInt(prompt("Ingrese el segundo número:"));
let ejer = numMayor(n1, n2);
console.log(ejer);

// 10. Crear una función que reciba un número y muestre tantos asteriscos como la cantidad de veces que se paso como parámetro
function numAsterisco(numero_asterisco) {
  let asteriscos = "";
  for (let i = 0; i < numero_asterisco; i++) {
    asteriscos += "*";
  }
  console.log(asteriscos);
}

let numeroAsterisco = parseInt(
  prompt("Ingrese un número para generar asteriscos:")
);
numAsterisco(numeroAsterisco);

/* 11. Crear una función que reciba el monto de un producto, y el medio de pago: C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito). 
Si el monto del producto es menor a $200 no se aplicará ningún descuento, pero si el monto a abonar es entre $200 y $400 se aplicará un descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y 10% con tarjeta de crédito.
Para montos mayores a $400, el descuento es el mismo sin importar el medio de pago, dicho descuento es del 40%.  La función deberá retornar el monto final a abonar.
*/
function venta(montoProducto, medioPago) {
  let montoFinal = 0;
  if (montoProducto < 200) {
    console.log(montoProducto);
    return "El producto no tiene descuento";
  }
  if (montoProducto >= 200 && montoProducto <= 400) {
    if (medioPago == "E") {
      montoFinal = montoProducto * 0.7;
      console.log("El monto final con el descuento es: " + montoFinal);
    } else if (medioPago == "D") {
      montoFinal = montoProducto * 0.8;
      console.log("El monto final con el descuento es: " + montoFinal);
    } else if (medioPago == "C") {
      montoFinal = montoProducto * 0.9;
      console.log("El monto final con el descuento es: " + montoFinal);
    } else {
      console.log("Medio de pago no válido");
    }
  }
  if (montoProducto > 400) {
    montoFinal = montoProducto * 0.6;
    console.log("El monto final con el descuento es: " + montoFinal);
  }
  return montoFinal;
}
let montoProducto = parseFloat(prompt("Ingrese el monto del producto:"));
let medioPago = prompt(
  "Ingrese el medio de pago (E: Efectivo, D: Débito, C: Crédito):"
).toUpperCase();
let resultadoVenta = venta(montoProducto, medioPago);

/* 12. Crear una función que reciba un número que represente la altura de un medio-árbol.
Deberá generar de manera escalonada el mismo.
*/

function medioArbol(altura) {
  let arbol = "";
  for (let i = 1; i <= altura; i++) {
    for (let j = 1; j <= i; j++) {
      arbol += "*";
    }
    arbol += "\n";
  }
  console.log(arbol);
}

medioArbol(6);

/* 13.
Crear una función que reciba un número que indica el día de la semana y retorne una cadena de texto indicando a qué día corresponde. 
Ejemplo: si es 1, deberá retornar lunes, 2 retornará martes, y así siguiendo. 
Si el día es 6 o 7 deberá retornar “fin de semana”.
En caso de un valor que no represente un día de la semana deberá retornar un mensaje de error.
*/

function diaSemana(numero) {
  switch (numero) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miércoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
    case 7:
      console.log("Fin de semana");
      break;
    default:
      console.log("Número no válido");
      break;
  }
}
diaSemana(5);


// 14 