function validarEmail(email) {
    
    let posicaoArroba = email.indexOf('@');
    let posicaoPonto = email.lastIndexOf('.');
    
   
    if (posicaoArroba > 0 && posicaoPonto > posicaoArroba + 1) {
        return true;
    } else {
        return false;
    }
}


console.log(validarEmail("teste@dominio.com"));  
console.log(validarEmail("teste@dominio"));      
console.log(validarEmail("testedominio.com"));   
