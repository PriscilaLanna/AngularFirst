
import Carro, { qualquer_coisa as QC} from "./Carro"
import Pessoa from "./Pessoa"
import Concessionaria  from "./Concessionaria"


let carro1 = new Carro("Veloster",3)
let carro2 = new Carro("Dodge",4)
let carro3 = new Carro("cerato",2)

let concessionaria = new Concessionaria("Av Paulista", [carro1,carro2,carro3])
console.log(concessionaria)

let pessoa = new Pessoa("Pri","Veloster")
console.log(pessoa.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro["modelo"]== pessoa.dizerCarroPreferido())
        pessoa.comprarCarro(carro)
})