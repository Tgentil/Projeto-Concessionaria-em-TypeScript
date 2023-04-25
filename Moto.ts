import Veiculo from "./Veiculo";

class moto extends Veiculo {
	public acelerar(): void {
		this.velocidade = this.velocidade + 20;
	}
}

export default moto;
