# Atividade - Codificação Typescript 1

## Enunciado

Faça a implementação necessária para que os testes da atividade_1 sejam implementados no repositório https://github.com/prof-emilio-resende/atividade-ts-basico

A entrega pode ser feita via github (novo repositório / fork) ou via zip file (menos desejável).


DICA: configure a classe Retangulo, conforme abaixo:

class Retangulo {
  constructor(private largura: number, private altura: number) {}

  area(): number {
    return this.largura * this.altura;
  }

  perimetro(): number {
    return 2 * (this.largura + this.altura);
  }
};
