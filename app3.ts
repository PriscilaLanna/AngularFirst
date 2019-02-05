import Carro from "./Carro"
import Moto from "./Moto"
import Concessionaria from "./Concessionaria";

let carro = new Carro("Veloster", 3)
carro.acelerar()

let moto = new Moto()
moto.acelerar()

let concessionaria = new Concessionaria("Av Paulista", [])

console.log(carro)
console.log(moto)
console.log(concessionaria.fornecerHorarioDeFuncionamento())