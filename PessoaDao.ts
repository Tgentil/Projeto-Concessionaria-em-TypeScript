import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export class PessoaDao implements DaoInterface {
	nomeTabela: string = "tb_pessoa";

	inserir(object: Pessoa): boolean {
		console.log("logica de insert");
		return true;
	}

	atualizar(object: Pessoa): boolean {
		console.log("logica update");
		return true;
	}

	remover(id: number): boolean {
		console.log("logica delete");
        return true;
	}

	selecionar(id: number) {
		console.log("logica select");
		return new Pessoa("", "");
	}

	selecionarTodos(): [any] {
		console.log("logica getAll");
		return [new Pessoa("", "")];
	}
}
