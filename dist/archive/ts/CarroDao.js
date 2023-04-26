"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDao = void 0;
const Carro_ts_1 = __importDefault(require("./Carro.ts"));
class CarroDao {
    constructor() {
        this.nomeTabela = "tb_Carro";
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
        return new Carro_ts_1.default("", 0);
    }
    selecionarTodos() {
        console.log("logica getAll");
        return [new Carro_ts_1.default("", 0)];
    }
}
exports.CarroDao = CarroDao;
