const Pessoa = require("./Pessoa.js");

class Professor extends Pessoa{
    #disciplina;
    #departamento;
    
    constructor(nome,idade,disciplina,departamento){
        super(nome,idade);
        this.#disciplina = disciplina;
        this.#departamento = departamento;
    }

    get Disciplina(){
        return this.#disciplina;
    }

    get Departamento(){
        return this.#departamento;
    }

    set Disciplina(disciplina){
        this.#disciplina = disciplina;
    }

    set Departamento(departamento){
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