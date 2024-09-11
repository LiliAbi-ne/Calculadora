import { Numero } from "./number";
export class Factorial extends Numero{
constructor(n:number){
    super(n);
}
factor(n: number): number{
    if(n=== 0){
        return 1;
    }else{
        return n * this.factor(n -1);
    }
}
calcularFactorial(): number {
    return this.factor(this.n);
}
   }
