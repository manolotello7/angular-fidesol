'use strict'

console.log(x)
var x = 23

function algo() {
    var x = 36
}

// ES6

let z = 76

function algo_ES6() {
    let z = 34
    console.log(z)
    {
        let z = 56
        console.log(z)
    }
}

console.log(z)
algo_ES6()

const K = 21
// K++ // error

const obj = {}
obj.nombre = 'Pepe'
// obj = {nombre: 'Juan'} // da error
console.log(obj)

const aDatos = [1, 4, 6]
aDatos.push(7)
console.log(aDatos)
// aDatos = 8 // Da error

const suma = function (a = 0, b = 0) {return a + b}
// suma = null // da error

console.log('La suma es', suma(5))

// Template string

let nombre = 'Pepe'
let saludo = `
    Hola ${nombre}, 
    ¿Cómo estás?`
nombre = 'Juan'

console.log(saludo)

// Funciones arrow (lambdas)

// const sumaArrow = (a,b)  => {return a + b}
const sumaArrow = (a,b)  => a + b
const cuadrado = a => a * a
console.log(sumaArrow(4, 7))
console.log(cuadrado(5))

// no pueden ser metodos
// no pueden ser constructoras
// uso diferente del this

const f1 = function () {
    console.log(this)
}
f1()

const o = {nombre: 'Pepe'}
o.f1 = f1
o.f1()

const o2 = new f1()
console.log(o2)

const fa = () => {
    console.log(this)
}

fa()

const o3 = {nombre: 'Pepe'}
o.f1 = fa
o.f1()

// Funciones de Arrays en ES5: forEach

const aNumeros = [1, 5, 6, 9, 4]

aNumeros.forEach((item, i) => console.log(`el item ${i} vale ${item}`));

// Nuevo bucle en ES6

for (const item of aNumeros) {
    console.log(item)
}

// Funciones de Arrays en ES5: map...

const aCuadrados = aNumeros.map( item => item * item)
console.log(aCuadrados)

/* aNumeros.filter()
aNumeros.reduce()
aNumeros.some()
aNumeros.every() */

// ES6: spread/rest operator

function media(...data) {
    return data.reduce( (a,b) => a +b )/ data.length
}

console.log(media (...[3, 7, 8, 9]))
