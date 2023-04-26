// import { ConcessionariaDao } from "./ConcessionariaDao";
// import { PessoaDao } from "./PessoaDao";
// import { VeiculoDao } from "./VeiculoDao";
// import { CarroDao } from "./CarroDao";
// import { MotoDao } from "./MotoDao";

import { Dao } from './Dao';

import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';
import Veiculo from "./Veiculo";
import Carro from './Carro';
import Moto from "./Moto";

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

let concessionaria = new Concessionaria("", []);
let pessoa: Pessoa = new Pessoa("", "");
let veiculo: Veiculo = new Veiculo("");
let carro: Carro = new Carro("", 4);
let moto: Moto = new Moto("");

let dao: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao1: Dao<Pessoa> = new Dao<Pessoa>();
let dao2: Dao<Veiculo> = new Dao<Veiculo>();
let dao3: Dao<Carro> = new Dao<Carro>();
let dao4: Dao<Moto> = new Dao<Moto>();

dao.inserir(concessionaria);
dao1.atualizar(pessoa);
dao2.atualizar(veiculo);
dao3.atualizar(carro);
dao4.inserir(moto);