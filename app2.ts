import Carro from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";

// --- criar carros ---

let carroA = new Carro("Gol", 4);
let carroB = new Carro("Fusca", 2);
let carroC = new Carro("Ferrari spider", 2);
let carroD = new Carro("Hilux", 4);
let CarroE = new Carro("320i", 4);
let carroF = new Carro("Audi r8", 4);
let carroG = new Carro("Volvo s60", 4);
let carroH = new Carro("Veloster", 3);

// --- montar a lsita de carros ---

let listaDeCarros: Array<Carro> = [
	carroA,
	carroB,
	carroC,
	carroD,
	CarroE,
	carroF,
	carroG,
	carroH,
];

let concessionaria = new Concessionaria("Av Paulista", listaDeCarros);

// --- exibir a lista de carros ---

// console.log(concessionaria.mostrarListaDeCarros());

// --- comprar o carro ---

let cliente = new Pessoa("thiago", "Ferrari spider");

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
	if (carro["modelo"] == cliente.dizerCarroPreferido()) {
		cliente.comprarCarro(carro);
	}
});

console.log(cliente.dizerCarroQueTem());
