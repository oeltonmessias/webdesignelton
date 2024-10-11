function contarVogais(str) {
    // Definir as vogais que devem ser contadas
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    
    // Contador de vogais
    let contador = 0;

    // Loop para verificar cada caractere da string
    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}

// Exemplo de uso
let texto = "javascript";
console.log(contarVogais(texto));  // Saída: 3 (vogais: 'a', 'a', 'i')
