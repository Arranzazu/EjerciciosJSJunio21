// Sumar con Promt
function suma() {
    let numero1 = prompt ("Escribe un número")
    let numero2 = prompt ("Escribe otro número")
   sumar = (+numero1) + (+numero2)
if (isNaN(sumar)) {
    alert("No se puede sumar valores que no sean números")
} else {
    alert("La suma de " + (numero1) + " y " + (numero2) + " es " + (sumar));
} }
// Convertir de grados centígrados a Celsius
function grados() {
    let temperatura = prompt ("¿Qué temperatura quieres que convierta?")
        fahrenheit = ((+temperatura)*1.8) + 32

    if (isNaN(fahrenheit)) {
            alert("No se pueden convertir valores no numéricos")
     } else {
    alert((temperatura) + " grados centígrados equivalen a " + (fahrenheit) +" grados Fahrenheit");
}}

// Dividir por 10 con Promt
function divide() {
    let numeral1 = prompt ("Escribie un número")
    dividir = (+numeral1) / 10

    if (isNaN(dividir)) {
        alert("No se pueden dividir valores no numéricos")
 } else {

    alert("La décima parte de " + (numeral1) + " es " + (dividir));
} }

// Par o Impar
function par() {
    let par1 = prompt ("Escribe un número")
    parimpar = (+par1) % 2
    if (parimpar === 0) {
        alert("El número " + (par1) + " es par.");
    } else {
        alert("El número " + (par1) + " es impar.");
    }
}

// Número divisible por Cinco
function cinco() {
    let cinco1 = prompt ("Escribe un número")
    cincodiv = (+cinco1) % 5
    if (cincodiv === 0) {
       console.log("El número " + (cinco1) + " es divisible por 5.");
    } else {
        console.log("El número " + (cinco1) + " no muestra un resultado entero al dividirlo por 5.");
    }
}

// Determinar si una palabra empieza por mayúsucla o minúscula
function mayusculas() {
    let palabra1 = prompt ("Escribe una palabra")
    maymin = palabra1.charAt(0)
    if (maymin == palabra1.toLowerCase(0)) {
       console.log("La palabra " + palabra1 + " empieza por minúscula.");
    } else {
        console.log("La palabra " + palabra1 + " empieza por mayúscula.");
    }
}
//Determinar si una palabra empieza por número o letra
function letra() {
    let palabra2 = prompt ("Escribe una palabra")
    numletra = palabra2
       if (numletra.startsWith()) {
       console.log("La palabra " + palabra2 + " empieza por un número.");
    } else {
        console.log("La palabra " + palabra2 + " empieza por una letra.");
    }
}


// Mostrar todos los números de 1 a n aumentando de 1 en 1
function numerosn() {
    let numeron = prompt ("Escribe un numero")
    let x = 0;
while (x < numeron) {
  x++;
  console.log(x);
}
}

// Mostrar todos los números de 1 a n aumentando de 2 en 2
function numerosx() {
    let numerox = prompt ("Escribe un numero")
    let x = 0;
while (x < numerox-1) {
    x += 2;
  console.log(x);
}
}

// números de N a 1 disminuyendo de 1 en 1 
function rest() {
    let numerest = prompt ("Escribe un numero y le restaré de 1 en 1 hasta cero")
    let x = 1;
while (x < numerest) {
  numerest--;
  console.log(numerest);
}
}

// Escribir utilizando console.log la tabla del 9 hasta 9x10
function tabla() {
       for(i = 1;i<=10;i++) {
  console.log(9 + " x " + i + " = " + 9 * i);
}
}
// hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras
function sumavar() {
    let suma = prompt ("Escribe un numero")
    let y = 0;
   suma.split('').forEach(suma => y += parseInt(suma));
   if (isNaN(suma)) {
       alert("Upss!, el valor introducido no es un número")
   }
   else {
   alert("La suma de los valores de " + suma + " es "+ y);
}
}

//suma de todos los números pares entre N y M
function sumapar() {
    let n = prompt ("Escribe el primer numero")
    let m = prompt ("Escribe el segundo numero")
    numero = (+n) + (+m);
    resultado= (+(m*(numero))/4);
    alert("La suma de todos los pares es " + (resultado));
}
    
// una función que reciba dos valores y devuelva la suma de ellos.
function sumadosval() {
    let n = prompt ("Escribe el primer numero")
    let m = prompt ("Escribe el segundo numero")
    sumadosv = (+n) + (+m)
    alert("La suma de los dos valores es " + sumadosv)
}

//una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.
function numoletra () {
        let texto = prompt ("Escribe un texto")
        let y = 0;
        texto.split('').forEach(texto => y += parseInt(texto));
        if (isNaN(texto)) {
            alert("Upss!, el valor introducido no es un número")
        }
        else {
        alert("Has introducion un número!");
     }
     }

//Crear una función autoejecutable que muestre "muuu" en pantalla
    function muu() {
        alert("muuu");
    }
// ARRAY
let array = [1,2,3,4,5,6];
//Iterar por todos los elementos dentro del array utilizando while y mostrarlos en pantalla.

function whille(){
let array2 = [1,2,3,4,5,6];
let i = 0;
while (i < array2.length){
       console.log(array2[i]);
       document.getElementById("while").value = (array2)
    ++i;
}
}
//Iterar por todos los elementos dentro del array utilizando for y mostrarlos en pantalla.
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//Iterar por todos los elementos dentro del array utilizando foreach y mostrarlos en pantalla.
array.forEach(function(array) {
    console.log(array);
});

//determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no
function color() {
let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let favorito = prompt ("¿Cual es tu color favorito?");
if (colores.includes(favorito)) {
    alert("¡Coincido!, tenemos los mismos gustos")
}
else {
    alert("Ese en un color bonito también")
}
}

//Convertir string en array
function creararray (){
    let valores = prompt ("Introduce valores separados por comas ")
    let arr = valores.split(','); 

        console.log(arr);
        alert(arr)
}

//OBJETOS
//Personas
//Crear un objeto Persona, que contenga nombre, edad y una función que determine si es mayor de edad o no
function edad(){
const persona = {
    nombre: prompt ("Introduce el nombre "),
    edad: prompt ("Introduce la eddad "),
  };
if (persona.edad >= 18){
    alert((persona.nombre) + " es mayor de edad")
} else {
    alert((persona.nombre) + " es menor de edad")
}
}
//Crear una función constructora que permita crear objetos del tipo Persona pasándole solo un nombre y edad.

//Opcion1
function constructora() {
    let valornombre = prompt ("Introduce el Nombre ")
    let valoredad = prompt ("Introduce la edad ")
 localStorage.setItem(valornombre, valoredad)
}
//Opcion2
function createNewPerson(name, edad) {
    let obj = {};
    obj.name = name;
    obj.edad = edad;
    obj.almacena = function() {
        localStorage.setItem(name, edad);
    };
    return obj;
  }
let salva = createNewPerson('Salva', '32');
salva.name;
salva.edad;
salva.almacena();

//Crear un array que contenga varios objetos Persona
const amigos=[
        "lucas",
        "virginia",
]
const lucas={
    NombreId: "Lucas",
    EdadId: 41,
}
const virginia={
    NombreId: "Virginia",
    EdadId: 39,
}
amigos.push(lucas, virginia)

console.log(JSON.stringify(amigos));


//Promedio de un Array
function promedio() {
let numero = [];
let suma=0;
let promedio=0;
let i = -1;
do{
    i++
    numero[i] = parseInt(prompt("Ingrese un número (0 para fin secuencia)"));
    suma = suma + numero[i];
}while(numero[i]!=0);
promedio=suma/(numero.length-1);
console.log(numero);
console.log('Suma: ' + suma + '<br></br>');
alert('El promedio de los números es: ' + suma + '/' + (numero.length-1) + '= ' + promedio);			
}


//Telefono
function telefono() {

const id = document.getElementById("idtel")
const telef = document.getElementById("numtel")


sessionStorage.setItem(id.value, telef.value)
localStorage.setItem(id.value, telef.value)

telefonos.innerHTML += `<option>${telef.value}</option>`
listado.innerHTML += `${telef.value}, ` 
form.reset() //Borro el formulario}
}

//pongo el elemento a la escucha
telefonos.addEventListener("change", () => {
document.getElementById("infovalue").textContent =
sessionStorage.getItem(telefonos[ telefonos.selectedIndex ].textContent) })