function inverterString(str) {
    return str.split('').reverse().join('');
}


let stringOriginal = "Facens";
let stringInvertida = inverterString(stringOriginal);

console.log(stringInvertida);
