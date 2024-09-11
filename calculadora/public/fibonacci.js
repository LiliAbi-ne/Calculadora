import { Numero } from "./number.js";
export class Fibonacci extends Numero {
    constructor(n) {
        super(n);
    }
    calcularFibonacci() {
        return this.fibonacci(this.n);
    }
    fibonacci(n) {
        if (n <= 1) {
            return n;
        }
        else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    }
}
