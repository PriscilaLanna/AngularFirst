import {DAOInterface} from "./DAOInterface"
import Concessionaria from "./Concessionaria";

export class ConcessionariaDAO implements DAOInterface{
    nomeTabela: string = "tb_concessionaria";    
    
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
        return new Concessionaria("",[])
    }
   
    selecionar(id: number) {
        console.log("selecionar")
        return new Concessionaria("",[])
    }
    
    selecionarTodos(): any[] {
        console.log("selecionarTodos")
        return [new Concessionaria("",[])]    
    }    
}