"use strict";
// import { ConcessionariaDao } from "./ConcessionariaDao";
// import { PessoaDao } from "./PessoaDao";
// import { VeiculoDao } from "./VeiculoDao";
// import { CarroDao } from "./CarroDao";
// import { MotoDao } from "./MotoDao";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dao_1 = require("./Dao");
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Veiculo_1 = __importDefault(require("./Veiculo"));
const Carro_1 = __importDefault(require("./Carro"));
const Moto_1 = __importDefault(require("./Moto"));
/*

let dao: ConcessionariaDao = new ConcessionariaDao();


let concessionaria = new Concessionaria("", []);

dao.inserir(concessionaria);

let dao2 = new PessoaDao();
let pessoa: Pessoa = new Pessoa("", "");

dao2.atualizar(pessoa);

let dao3 = new VeiculoDao();
let veiculo: Veiculo = new Veiculo("");

dao3.atualizar(veiculo);

let dao4 = new CarroDao();
let carro: Carro = new Carro("", 4);

dao4.inserir(carro);
let  dao5 = new MotoDao();
let moto: Moto = new Moto("");

dao5.atualizar(moto);
*/
let concessionaria = new Concessionaria_1.default("", []);
let pessoa = new Pessoa_1.default("", "");
let veiculo = new Veiculo_1.default("");
let carro = new Carro_1.default("", 4);
let moto = new Moto_1.default("");
let dao = new Dao_1.Dao();
let dao1 = new Dao_1.Dao();
let dao2 = new Dao_1.Dao();
let dao3 = new Dao_1.Dao();
let dao4 = new Dao_1.Dao();
dao.inserir(concessionaria);
dao1.atualizar(pessoa);
dao2.atualizar(veiculo);
dao3.atualizar(carro);
dao4.inserir(moto);
