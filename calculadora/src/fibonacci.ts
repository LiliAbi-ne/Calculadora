import { Numero } from "./number";

export class Fibonacci extends Numero{
    constructor(n: number){
        super(n);
    }
    calcularFibonacci(): number{
        return this.fibonacci(this.n);
    }

    private fibonacci(n: number): number{
        if(n <= 1){
            return n;
        }else{
            return this.fibonacci(n-1) + this.fibonacci( n- 2);
        }
    }
}