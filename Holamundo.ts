// console.log("Hola mundo")

// let num1: number = 20
// let num2: number = 10

// let result = (num1 + num2)

// console.log(result)

// console.log(10 + 20)

// let Booleano: boolean = true
// console.log(`Booleano: ${Booleano}`)

// let strings: string = "String"
// console.log(`Cadena de textosssss: ${strings}`)

// let numeros: number = 5.25
// console.log(`Numeros: ${numeros}`)

// console.log("CONDICIONAL")

// const numero: number = 20
// if (numero >= 20) {

//     console.log("Es mayor")
// } else {
//     console.log("Es menor")
// }



// console.log("ARRAY")

// let array: number[] = [
//     1,2,10,20,30,40,50
// ]
// let buscarnumero : number = 20
// let arrcompleto = array.map(function (element) {

//     if (buscarnumero == element) {
//         console.log(buscarnumero)
//     } else {
//         console.log ("No está en esta posición")
//     }
//     return element
// })

// console.log("MOSTRAR TODO EL ARRAY: " + arrcompleto)



class Ventilador {

    marca: string
    color: string
    seMueve: boolean
    numeroAspas: number
    // velocidades: []


    constructor(marca: string, color: string, seMueve: boolean, numeroAspas: number) {

        this.marca = marca
        this.color = color
        this.seMueve = seMueve
        this.numeroAspas = numeroAspas


    }

    getMarca() {
        return this.marca
    }

    setMarca(_marca:string) {
        this.marca = _marca
    }

    encenderVentilador() {
        return "El vetilador está encendido, " + this.marca
    }
}

let vent = new Ventilador("Samurai", "negro", true, 3)
vent.encenderVentilador()
console.log(vent.encenderVentilador())  
vent.setMarca("OFTEN")

console.log(vent.encenderVentilador())
console.log("La marca del ventilador es: " + vent.getMarca())

