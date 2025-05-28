// Davidson.dias@aluno.faculdadeimpacta.com.br

class Animal {
    constructor(private nome: string, private idade: number) { }

    fazerSom() {
        return "Som genérico"
    }

    getInfo() {
        return `${this.nome} tem ${this.idade} anos`;
    }
}

class Cachorro extends Animal {
    private raca: string;

    constructor(nome: string, idade: number, raca: string) {
        super(nome, idade);
        this.raca = raca;
    }

    fazerSom() {
        return "Au au!"
    }

    getRaca() {
        return this.raca
    }
}

class Container<T> {
    private itens: T[] = [];

    adicionar(item: T) {
        this.itens.push(item);
    }

    obter(index: number): T | undefined {
        return this.itens[index];
    }

    limpar() {
        this.itens = [];
    }

    contagem(): number {
        return this.itens.length;
    }
}

export { Animal, Cachorro, Container }