class Cuenta {
    
     titular: string
     valorActual: number

    constructor(titular: string, valorActual: number = 0) {

        this.titular = titular;
        this.valorActual = valorActual;
    }

    getTitular(){
        return this.titular;
    }

    setTitular(titular: string): void {
        this.titular = titular;
    }

    getValorActual(){
        return this.valorActual;
    }

    setValorActual(valorActual: number): void {
        this.valorActual = valorActual;
    } 

    mostrar(): void {
        console.log(`Titular: ${this.titular}, Valor Actual: ${this.valorActual}`);
    }

    ingresar(cantidad: number): void {
        if (cantidad < 0) {
            console.log("No es válido el valor")
        } else {
            this.valorActual += cantidad;
        }
    }
}

let cuenta1 = new Cuenta("Sthefanny Rodríguez", 10000)
cuenta1.mostrar()
cuenta1.ingresar(500000) 
cuenta1.mostrar()
cuenta1.ingresar(-200)