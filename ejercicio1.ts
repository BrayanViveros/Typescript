class Persona {

    nombre: string
    edad: number
    telefono: number
    direccion: string
    ciudad: string


    constructor(nombre: string, edad: number, telefono: number, direccion: string, ciudad: string) {

        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.direccion = direccion
        this.ciudad = ciudad


    }

    getNombre() {
        return this.nombre
    }

    setNombre(name: string) {
        this.nombre = name
    }

    getEdad() {
        return this.edad
    }

    setEdad(edad: number) {
        this.edad = edad
    }

    getTelefono() {
        return this.telefono
    }

    setTelefono(telefono: number) {
        this.telefono = telefono
    }

    getDireccion() {
        return this.direccion
    }

    setDireccion(direccion: string) {
        this.direccion = direccion
    }

    getCiudad() {
        return this.ciudad
    }

    setCiudad(ciudad: string) {
        this.ciudad = ciudad
    }

}

function mostrarDatos(personas: Persona[]) {
    for (let i = 0; i < personas.length; i++) {
         console.log(personas[i].nombre + personas[i].edad + personas[i].telefono + personas[i].direccion + personas[i].ciudad);

        

    }
}

function mayorOmenor(personas: Persona[]) { 
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad > 18){
            console.log("ES MAYOR" +personas[i].edad, personas[i].nombre)
        } else {
            console.log("ES MENOR DE EDAD")
        }
    }
    
}

let persona1 = new Persona("Lina ", 22, 3125893568, " CLL5-13 ", " Pasto ")
let persona2 = new Persona("Lorena", 35, 3122163015, "CLL5-16", "Popayán")
let persona3 = new Persona("Alejandro", 9, 3125892598, "CLL7-20", "Popayán")
let persona4 = new Persona("Maria", 50, 3125147895, "CLL60-13", "Cali")
let persona5 = new Persona("Stiven", 19, 3127143016, "CLL61-20", "Medellín")
let personas: Persona[] = [persona1, persona2, persona3, persona4, persona5]

console.log("MÉTODOS")
console.log("**MOSTRAR DATOS** ")
console.log(mostrarDatos(personas));
console.log(mayorOmenor(personas));