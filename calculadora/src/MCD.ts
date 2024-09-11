import { Numero } from "./number";

export class MCD extends Numero {
    private otherNumber: number;

    constructor(n: number, otherNumber: number) {
        super(n);
        this.otherNumber = otherNumber;
    }

    
    calcularMcd(): number {
        return this.euclides(this.n, this.otherNumber);
    }

 
    private euclides(a: number, b: number): number {
        if (b === 0) {
            return a;
        } else {
            return this.euclides(b, a % b);
        }
    }
}
