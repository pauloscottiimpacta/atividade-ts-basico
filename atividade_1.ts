const nome: string = "Maria";
const idade: number = 30;
const altura: number = 1.75;
const estudante: boolean = true;

class Retangulo {
    constructor(private largura: number, private altura: number) { }

    area(): number {
        return this.largura * this.altura;
    }

    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
};

function verificaParImpar(n: number): string {
    if (n % 2 === 0) {
        return "par"
    } else {
        return "ímpar"
    }
}

function somatorio(n: number): number {
    let resposta: number = 0;
    for (let i = 1; i <= n; i++) {
        resposta = resposta + i
    }

    return resposta
}

function fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

export { nome, idade, altura, estudante }
export { verificaParImpar, somatorio, fibonacci }
export { Retangulo }