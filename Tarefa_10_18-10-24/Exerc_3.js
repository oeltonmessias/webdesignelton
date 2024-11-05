function somaArray(numeros) 
{
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

let numeros = [10, 20, 30, 40, 50];
console.log(somaArray(numeros)); 
