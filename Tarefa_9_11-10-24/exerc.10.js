function verificarPalindromo(str) {
    // Remover espaços e converter a string para minúsculas
    let stringFormatada = str.replace(/\s+/g, '').toLowerCase();
    
    // Inverter a string
    let stringInvertida = stringFormatada.split('').reverse().join('');
    
    // Verificar se a string original formatada é igual à string invertida
    return stringFormatada === stringInvertida;
}

// Exemplo de uso
console.log(verificarPalindromo("arara"));  // true
console.log(verificarPalindromo("palavra"));  // false
