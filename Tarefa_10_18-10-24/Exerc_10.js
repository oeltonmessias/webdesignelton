let alunos = [
    {nome: "Elton", idade: 37},
    {nome: "Ana", idade: 17},
    {nome: "Lucas", idade: 22},
    {nome: "Maria", idade: 18}
];

function alunosMaior(array) 
{
    return array.filter(aluno => aluno.idade > 18);
}

console.log(alunosMaior(alunos));

