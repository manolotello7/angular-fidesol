function Persona(name, edad = 0) {
    this.name = name
    this.edad = edad
}

Persona.prototype.saludar = function () {
        console.log (` Hola soy ${this.name}`)
    }


const p1 = new Persona('Pepe')
console.log(p1)
p1.saludar()

const p2 = new Persona('Rosa', 23)
p2.altura = 177
console.log(p2)
p2.saludar()