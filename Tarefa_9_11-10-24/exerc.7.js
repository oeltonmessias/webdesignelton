function inverterString(str) {
    return str.split('').reverse().join('');
}

// Exemplo de uso
let stringOriginal = "Facens";
let stringInvertida = inverterString(stringOriginal);

console.log(stringInvertida);
