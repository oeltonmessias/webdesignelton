function verificarPalindromo(str) {
  
    let stringFormatada = str.replace(/\s+/g, '').toLowerCase();
    
    
    let stringInvertida = stringFormatada.split('').reverse().join('');
   
    return stringFormatada === stringInvertida;
}


console.log(verificarPalindromo("arara"));  
console.log(verificarPalindromo("palavra")); 
