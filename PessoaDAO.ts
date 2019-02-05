import {DAOInterface} from "./DAOInterface"
import Pessoa from "./Pessoa";

export class PessoaDAO implements DAOInterface{
    nomeTabela: string = "tb_pessoa";    
    
    inserir(object: any): boolean {
       console.log("insert")
       return true
    }
   
    atualizar(object: any): boolean {
        console.log("atualizar")
       return true
    }
    
    deletar(id: number) {
        console.log("deletar")
        return new Pessoa("Priscila","")
    }
   
    selecionar(id: number) {
        console.log("selecionar")
        return new Pessoa("Priscila","")
    }
    
    selecionarTodos(): any[] {
        console.log("selecionarTodos")
        return [new Pessoa("Priscila",""),new Pessoa("Luiz","")]    
    }    
}