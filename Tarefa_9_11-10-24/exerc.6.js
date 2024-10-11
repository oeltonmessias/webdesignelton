function mostrarDobro(numero) {
    if (numero > 0) {
        console.log("O dobro é: " + (numero * 2));
    } else {
        console.log("Só é aceito números positivos maiores que zero");
    }
}

// Exemplo de uso
mostrarDobro(5);  // Vai mostrar "O dobro é: 10"
mostrarDobro(-3); // Vai mostrar "Só é aceito números positivos maiores que zero"
