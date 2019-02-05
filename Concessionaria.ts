import { ConcessionariaInterface } from "./ConcessionariaInterface"
import Carro from "./Carro"

export default class Concessionaria implements ConcessionariaInterface{
   
    private endereco: string = ""
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros:Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros =listaDeCarros
    }

    fornecerHorarioDeFuncionamento(): string {
        return "De Segunda a Sexta das 8:00 as 18:00"
        //throw new Error("Method not implemented.");
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros
    }
}