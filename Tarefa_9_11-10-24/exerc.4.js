function gerarEmail(nomeCompleto) {
    // Separar o nome completo em partes
    let partesNome = nomeCompleto.split(' ');

    // Pegar o primeiro e o último nome
    let primeiroNome = partesNome[0].toLowerCase();
    let ultimoNome = partesNome[partesNome.length - 1].toLowerCase();

    // Formatar o e-mail
    let email = `${primeiroNome}.${ultimoNome}@facens.br`;

    // Exibir o e-mail
    console.log(email);
}

// Exemplo de uso
let nome = "Fabio Rodrigo Colombini";
gerarEmail(nome);
