// String
let cadena: string = "ebosarreyes@masterdevel.com";

// number
let numero: number = 12;

// Boleano
let verdadero_falso: boolean = true;

// Any -> Significa cualquier cosa
let cualquier: any = "hola";

// Arrays
var lenguajes: Array<string> = ["PHP", "JS", "Java", "CSS"];
let years: number[] = [12, 13, 14]

//Multiples tipos de datos asignado a una variable
let cadena1: string | number = "victorrobles.es"
cadena1 = 25;

// Crear un tipo de dato
type alfanumerico = string | number;

let cadena2: alfanumerico = 12;

// let vs variable
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
  let numero1 = 44;
  var numero2 = 55;

  console.log(numero1, numero2);
}

console.log(numero1, numero2);