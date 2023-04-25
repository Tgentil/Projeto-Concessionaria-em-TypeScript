"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
// --- criar carros ---
let carroA = new Carro_1.default("Gol", 4);
let carroB = new Carro_1.default("Fusca", 2);
let carroC = new Carro_1.default("Ferrari spider", 2);
let carroD = new Carro_1.default("Hilux", 4);
let CarroE = new Carro_1.default("320i", 4);
let carroF = new Carro_1.default("Audi r8", 4);
let carroG = new Carro_1.default("Volvo s60", 4);
let carroH = new Carro_1.default("Veloster", 3);
// --- montar a lsita de carros ---
let listaDeCarros = [
    carroA,
    carroB,
    carroC,
    carroD,
    CarroE,
    carroF,
    carroG,
    carroH,
];
let concessionaria = new Concessionaria_1.default("Av Paulista", listaDeCarros);
// --- exibir a lista de carros ---
// console.log(concessionaria.mostrarListaDeCarros());
// --- comprar o carro ---
let cliente = new Pessoa_1.default("thiago", "Ferrari spider");
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro["modelo"] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
