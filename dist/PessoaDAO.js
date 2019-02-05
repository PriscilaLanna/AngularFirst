"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = "tb_pessoa";
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log("insert");
        return true;
    };
    PessoaDAO.prototype.atualizar = function (object) {
        console.log("atualizar");
        return true;
    };
    PessoaDAO.prototype.deletar = function (id) {
        console.log("deletar");
        return new Pessoa_1.default("Priscila", "");
    };
    PessoaDAO.prototype.selecionar = function (id) {
        console.log("selecionar");
        return new Pessoa_1.default("Priscila", "");
    };
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log("selecionarTodos");
        return [new Pessoa_1.default("Priscila", ""), new Pessoa_1.default("Luiz", "")];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
