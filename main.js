const Professor = require("./classes/Professor.js");

let professor1 = new Professor("Marco Piloto", 69, "Programação", "Departamento do Senai");



console.log(professor1.Disciplina);

console.log(professor1.Departamento);

console.log(professor1.darAula());

console.log(professor1.verificarDepartamento());