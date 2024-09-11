import { Factorial } from './factorial';
import { Fibonacci } from './fibonacci';
import { MCD } from './MCD'; // Importa la clase MCD desde el nuevo archivo

function calcularFactorial(event: Event) {
    event.preventDefault();
    const input = document.getElementById("factorialInput") as HTMLInputElement;
    const n = parseInt(input.value);

    if (!isNaN(n) && n >= 0) {
        const fct = new Factorial(n);
        document.getElementById("resultadoFactorial")!.innerText = `El factorial de ${n} es: ${fct.calcularFactorial()}`;
    } else {
        document.getElementById("resultadoFactorial")!.innerText = "Por favor, ingrese un número válido.";
    }
}

function calcularFibonacci(event: Event) {
    event.preventDefault();
    const input = document.getElementById("fibonacciInput") as HTMLInputElement;
    const n = parseInt(input.value);

    if (!isNaN(n) && n >= 0) {
        const fibo = new Fibonacci(n);
        document.getElementById("resultadoFibonacci")!.innerText = `El número Fibonacci de ${n} es: ${fibo.calcularFibonacci()}`;
    } else {
        document.getElementById("resultadoFibonacci")!.innerText = "Por favor, ingrese un número válido.";
    }
}

function calcularMcd(event: Event) {
    event.preventDefault();
    const input1 = document.getElementById("mcdInput1") as HTMLInputElement;
    const input2 = document.getElementById("mcdInput2") as HTMLInputElement;
    const n1 = parseInt(input1.value);
    const n2 = parseInt(input2.value);

    if (!isNaN(n1) && !isNaN(n2) && n1 >= 0 && n2 >= 0) {
        const mcd = new MCD(n1, n2);
        document.getElementById("resultadoMcd")!.innerText = `El MCD de ${n1} y ${n2} es: ${mcd.calcularMcd()}`;
    } else {
        document.getElementById("resultadoMcd")!.innerText = "Por favor, ingrese dos números válidos.";
    }
}

document.getElementById("BttnFacto")!.addEventListener("click", calcularFactorial);
document.getElementById("BttnFibo")!.addEventListener("click", calcularFibonacci);
document.getElementById("BttnMcd")!.addEventListener("click", calcularMcd);
