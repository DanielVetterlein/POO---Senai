const Pessoa = require("./Pessoa.js");

class Professor extends Pessoa{
    #disciplina;
    #departamento;
    
    constructor(nome,idade,disciplina,departamento){
        super(nome,idade);
        this.#disciplina = disciplina;
        this.#departamento = departamento;
    }

    getDisciplina(){
        return this.#disciplina;
    }

    getDepartamento(){
        return this.#departamento;
    }

    setDisciplina(disciplina){
        this.#disciplina = disciplina;
    }

    setDepartamento(departamento){
        this.#departamento = departamento;
    }


    darAula(){
        return `A aula de ${this.#disciplina} começou`
    }

    verificarDepartamento(){
        return `O professor ${this.nome} pertence ao departamento de ${this.#departamento}`
    }

}
module.exports = Professor;