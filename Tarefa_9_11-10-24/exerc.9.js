function validarEmail(email) {
    // Verifica se existe apenas um '@' e se há um '.' após o '@'
    let posicaoArroba = email.indexOf('@');
    let posicaoPonto = email.lastIndexOf('.');
    
    // O '@' deve existir e estar antes do '.'
    if (posicaoArroba > 0 && posicaoPonto > posicaoArroba + 1) {
        return true;
    } else {
        return false;
    }
}

// Exemplo de uso
console.log(validarEmail("teste@dominio.com"));  // true
console.log(validarEmail("teste@dominio"));      // false
console.log(validarEmail("testedominio.com"));   // false
