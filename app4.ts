import {ConcessionariaDAO} from "./ConcessionariaDAO"
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";
import { PessoaDAO } from "./PessoaDAO";

let daoConc = new ConcessionariaDAO()

console.log(daoConc.inserir(new Concessionaria("",[])))
console.log(daoConc.nomeTabela);

let daoPessao = new PessoaDAO()

console.log(daoPessao.selecionarTodos())
console.log(daoPessao.nomeTabela);