"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carro1 = new Carro_1.default("Veloster", 3);
var carro2 = new Carro_1.default("Dodge", 4);
var carro3 = new Carro_1.default("cerato", 2);
var concessionaria = new Concessionaria_1.default("Av Paulista", [carro1, carro2, carro3]);
console.log(concessionaria);
var pessoa = new Pessoa_1.default("Pri", "Veloster");
console.log(pessoa.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro["modelo"] == pessoa.dizerCarroPreferido())
        pessoa.comprarCarro(carro);
});
