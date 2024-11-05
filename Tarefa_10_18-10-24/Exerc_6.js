let aluno = {
    nome: "Elton",
    idade: 37,
    curso: "Engenharia da Computação",
    matricula: "248936",
    
    mostrarInformacoes: function() 
    {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Matrícula: ${this.matricula}`);
    }
};

aluno.mostrarInformacoes(); 

