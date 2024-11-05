// URL da coleção "Animal" no Mockapi.io
const apiURL = 'https://6724b590c39fedae05b27134.mockapi.io/oeltonmessias/Animal';  // Substitua com o link gerado para sua coleção

// Função para listar animais do backend e exibir na página
function listarAnimais() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const animalList = document.getElementById('animalList');
            animalList.innerHTML = ''; // Limpa a lista antes de adicionar novos elementos
            data.forEach(animal => {
                const listItem = document.createElement('li');
                listItem.textContent = `${animal.id} - ${animal.name} (${animal.idade} anos) - ${animal.raca}`;
                animalList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao carregar animais:', error));
}

// Função para cadastrar um novo animal com dados fixos
function cadastrarAnimal() {
    const novoAnimal = {
        name: 'Totó',
        idade: 12,
        raca: 'Cachorro'
    };

    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoAnimal)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Animal cadastrado:', data);
        listarAnimais(); // Atualiza a lista com o novo animal
    })
    .catch(error => console.error('Erro ao cadastrar animal:', error));
}

// Carregar a lista de animais ao carregar a página
document.addEventListener('DOMContentLoaded', listarAnimais);




// function soma(num1, num2, callback) {
//     let result = num1 + num2;
//     callback(result);
// }


// soma(2, 3, displayConsole);


let file = "db.json";


fetch(file)
    .then(response => response.json())
    .then(myArray => {
        console.log(myArray);
        document.querySelector('#txt').innerHTML = myArray[2].nome;
    });
