import Carro from "./Carro";

export default class Pessoa{
    private nome: string
    private carroPreferido: string
    private carro!: Carro; 

    constructor(nome:string, carroPreferido: string){
        this.nome = nome 
        this.carroPreferido = carroPreferido
    }

    public dizerNome(){
        return this.nome
    }

    public dizerCarroPreferido(){
        return this.carroPreferido
    }
    
    public comprarCarro(carro:Carro){
        this.carro = carro
    }

    public dizerCarroQueTem(){
        return this.carro
    }
}