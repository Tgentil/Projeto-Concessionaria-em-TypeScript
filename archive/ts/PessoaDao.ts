import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export class PessoaDao<T> implements DaoInterface<T> {
	nomeTabela: string = "tb_pessoa";

inserir(object: T): boolean {
		console.log("logica de insert");
		return true;
	}

	atualizar(object: T): boolean {
		console.log("logica update");
		return true;
	}

	remover(id: number): boolean {
		console.log("logica delete");
		return true;
	}

	selecionar(id: number): T {
		console.log("logica select");
		return Object() as T;
	}

	selecionarTodos(): [T] {
		console.log("logica getAll");
		return [Object() as T];
	}
}
