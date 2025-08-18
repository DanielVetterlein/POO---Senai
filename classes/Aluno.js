const Pessoa = require("./Pessoa.js");

class Aluno extends Pessoa{
    matricula;
    
    constructor(nome,idade,matricula){
        super(nome,idade)
        this.matricula = matricula
    }
    Estudar(){
        return `+10 de experiência para chegar ao pleroma e atingir a gnose`;
    }
}
module.exports = Aluno;