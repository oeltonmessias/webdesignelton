function adicionarCard() {
    const titulo = document.getElementById('titulo').value;
    if (titulo.trim() === "") return;

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
    document.getElementById('titulo').value = "";
}

function apagarCard(button) {
    const card = button.closest('.col-md-3');
    card.remove();
}

function apagarTodos() {
    const cardContainer = document.getElementById('cardContainer').firstElementChild;
    cardContainer.innerHTML = "";
}
