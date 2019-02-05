"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDAO_1 = require("./ConcessionariaDAO");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var PessoaDAO_1 = require("./PessoaDAO");
var daoConc = new ConcessionariaDAO_1.ConcessionariaDAO();
console.log(daoConc.inserir(new Concessionaria_1.default("", [])));
console.log(daoConc.nomeTabela);
var daoPessao = new PessoaDAO_1.PessoaDAO();
console.log(daoPessao.selecionarTodos());
console.log(daoPessao.nomeTabela);
