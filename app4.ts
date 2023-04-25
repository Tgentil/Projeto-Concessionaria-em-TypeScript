import { ConcessionariaDao } from "./ConcessionariaDao";
import Concessionaria from "./Concessionaria";

import { PessoaDao } from "./PessoaDao";
import Pessoa from "./Pessoa";

import { VeiculoDao } from "./VeiculoDao";
import Veiculo from "./Veiculo";

import { CarroDao } from "./CarroDao";
import Carro from "./Carro";

import { MotoDao } from "./MotoDao";
import Moto from "./Moto";

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