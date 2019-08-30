interface SerVivo {
    especie: string
}

class Persona implements SerVivo {
    static pensar() {
        console.log('Las personas piensan')
    }
    name: string
    edad : number
    especie: string 
    constructor(name, edad = 0) {
        this.especie = 'Humano'
        this.name = name
        this.edad = edad
    }
    saludar() {
        console.log (`Hola soy ${this.name}`)
    }
}

const p1: Persona = new Persona('Pepe')
console.log(p1)
p1.saludar()

const p2 = new Persona('Rosa', 23)
// p2.altura = 177 Error en TS
console.log(p2)
p2.saludar()

class Alumno extends Persona {
    curso: string
    constructor(name, edad = 0, curso) {
        super(name, edad = 0)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a1: Alumno = new Alumno('Elena', 34, 'Angular')
console.log(a1)
a1.saludar()

Persona.pensar()