function gerarEmail(nomeCompleto) {
    
    let partesNome = nomeCompleto.split(' ');

    
    let primeiroNome = partesNome[0].toLowerCase();
    let ultimoNome = partesNome[partesNome.length - 1].toLowerCase();

    let email = `${primeiroNome}.${ultimoNome}@facens.br`;


    console.log(email);
}

let nome = "Fabio Rodrigo Colombini";
gerarEmail(nome);
