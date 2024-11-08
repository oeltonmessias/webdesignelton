document.getElementById('cadastrarBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão para evitar recarregar a página
    adicionarCard();
});

function adicionarCard() {
    const titulo = document.getElementById('titulo').value;
    if (titulo.trim() === "") {
        alert("Por favor, insira um título para o card.");
        return;
    }

    const cardContainer = document.getElementById('cardContainer').firstElementChild;

    const card = document.createElement('div');
    card.className = 'col-md-3 mb-4';

    card.innerHTML = `
        <div class="card">
            <img src="https://picsum.photos/150" class="card-img-top" alt="Imagem do Card">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <button class="btn btn-danger" onclick="apagarCard(this)">Apagar</button>
            </div>
        </div>
    `;

    cardContainer.appendChild(card);
    document.getElementById('titulo').value = ""; // Limpa o campo de entrada após adicionar o card
}

function apagarCard(button) {
    const card = button.closest('.col-md-3');
    card.remove();
}

function apagarTodos() {
    const cardContainer = document.getElementById('cardContainer').firstElementChild;
    cardContainer.innerHTML = "";
}
