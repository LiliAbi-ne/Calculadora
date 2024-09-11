import { Numero } from "./number.js";
export class MCD extends Numero {
    constructor(n, otherNumber) {
        super(n);
        this.otherNumber = otherNumber;
    }
    calcularMcd() {
        return this.euclides(this.n, this.otherNumber);
    }
    euclides(a, b) {
        if (b === 0) {
            return a;
        }
        else {
            return this.euclides(b, a % b);
        }
    }
}
