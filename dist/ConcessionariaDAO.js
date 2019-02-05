"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = "tb_concessionaria";
    }
    ConcessionariaDAO.prototype.inserir = function (object) {
        console.log("insert");
        return true;
    };
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log("atualizar");
        return true;
    };
    ConcessionariaDAO.prototype.deletar = function (id) {
        console.log("deletar");
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log("selecionar");
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log("selecionarTodos");
        return [new Concessionaria_1.default("", [])];
    };
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;
