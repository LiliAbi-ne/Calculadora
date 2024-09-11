import { Numero } from "./number.js";
export class Factorial extends Numero {
    constructor(n) {
        super(n);
    }
    factor(n) {
        if (n === 0) {
            return 1;
        }
        else {
            return n * this.factor(n - 1);
        }
    }
    calcularFactorial() {
        return this.factor(this.n);
    }
}
