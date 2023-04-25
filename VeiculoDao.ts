import { DaoInterface } from "./DaoInterface";
import Veiculo from "./Veiculo";

export class VeiculoDao implements DaoInterface {
	nomeTabela: string = "tb_Veiculo";

	inserir(object: Veiculo): boolean {
		console.log("logica de insert");
		return true;
	}

	atualizar(object: Veiculo): boolean {
		console.log("logica update");
		return true;
	}

	remover(id: number): boolean {
		console.log("logica delete");
		return true;
	}

	selecionar(id: number) {
		console.log("logica select");
		return new Veiculo("");
	}

	selecionarTodos(): [any] {
		console.log("logica getAll");
		return [new Veiculo("")];
	}
}
