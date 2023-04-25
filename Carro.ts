import  Veiculo from './Veiculo';

export default class Carro extends Veiculo {
	private numeroDePortas: number;

	constructor(modelo: string | null , numeroDePortas: number) {
		super(modelo); // Chama o construtor da classe Veiculo
		this.numeroDePortas = numeroDePortas;
	}
}

