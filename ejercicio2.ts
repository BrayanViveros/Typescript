class Operaciones {

    numero1: number
    numero2: number

    constructor(numero1: number, numero2: number) {

        this.numero1 = numero1;
        this.numero2 = numero2;
        
    }
    

    getNumero1() {
        return this.numero1;
    }

    setNumero1(numero1: number) {
        this.numero1 = numero1;

    }

    getNumero2() {
        return this.numero2;
    }

    setNumero2(numero2: number) {
        this.numero2 = numero2;
    }

    sumar(){

        return this.numero1 + this.numero2; 
        let resultado = this.numero1 + this.numero2;
        console.log(`La suma de ${this.numero1} y ${this.numero2} es: ${resultado}`)
    }

    restar(){

        return this.numero1 - this.numero2;
        let result = this.numero1 - this.numero2;
        console.log(`La resta de ${this.numero1} y ${this.numero2} es: ${result}`)
    }

    multiplicar(){
         
        return this.numero1 * this.numero2
        let res = this.numero1 * this.numero2
        console.log(`La multiplicación de ${this.numero1} y ${this.numero2} es: ${res}`)
    }

    dividir(): number {
        if (this.numero2 !== 0) {
            return this.numero1 / this.numero2;
        } else {
            throw new Error("No se puede dividir por cero.");
        }
    }

}

let operacion = new Operaciones(5, 3)
console.log("El resultado de la SUMA es:" + operacion.sumar())

let operacion2 = new Operaciones (20, 10)
console.log("El resultado de la RESTA es: " + operacion2.restar())

let operacion3 = new Operaciones (20, 10)
console.log("El resultado de la MULTIPLICACIÓN es: " + operacion3.multiplicar())

let operacion4 = new Operaciones (20, 5)
console.log("El resultado de la DIVISIÓN es:" + operacion4.dividir())

let operacion5 = new Operaciones (20, 20)
console.log("El resultado de la SUMA es: " + operacion5.sumar())

