const Professor = require("./classes/Professor.js");

let professor1 = new Professor("Marco Piloto", 69, "Programação", "Departamento do Senai");



console.log(professor1.getDisciplina());

console.log(professor1.getDepartamento());

console.log(professor1.darAula());

console.log(professor1.verificarDepartamento());