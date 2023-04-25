"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor(modelo) {
        this.velocidade = 0;
        this.modelo = modelo;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
exports.default = Veiculo;
