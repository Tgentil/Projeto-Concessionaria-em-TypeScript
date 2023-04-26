"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
class PessoaDao {
    constructor() {
        this.nomeTabela = "tb_pessoa";
    }
    inserir(object) {
        console.log("logica de insert");
        return true;
    }
    atualizar(object) {
        console.log("logica update");
        return true;
    }
    remover(id) {
        console.log("logica delete");
        return true;
    }
    selecionar(id) {
        console.log("logica select");
        return Object();
    }
    selecionarTodos() {
        console.log("logica getAll");
        return [Object()];
    }
}
exports.PessoaDao = PessoaDao;
