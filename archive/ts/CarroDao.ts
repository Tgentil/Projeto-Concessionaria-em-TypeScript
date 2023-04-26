import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro.ts";

export class CarroDao implements DaoInterface {
	nomeTabela: string = "tb_Carro";

	inserir(object: Carro): boolean {
		console.log("logica de insert");
		return true;
	}

	atualizar(object: Carro): boolean {
		console.log("logica update");
		return true;
	}

	remover(id: number): boolean {
		console.log("logica delete");
		return true;
	}

	selecionar(id: number) {
		console.log("logica select");
		return new Carro("", 0 );
	}

	selecionarTodos(): [any] {
		console.log("logica getAll");
		return [new Carro("", 0)];
	}
}
