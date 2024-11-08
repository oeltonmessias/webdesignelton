function cad() {
    const titulo = document.getElementById('title').value;
    const col = document.createElement('div');
    col.classList.add('col-md-3', 'mb-3');
    const randomNum = Math.floor(Math.random() * 1000);

    col.innerHTML = `
        <div class="card">
            <img src="https://picsum.photos/400/200?random=${randomNum}" class="card-img-top" alt="">
            <div class="card-body d-flex align-items-center flex-column">
                <h5 class="card-title">${titulo}</h5>
                <button class="btn btn-danger" onclick="removerCard(this)">Remover</button>
            </div>
        </div>  
    `;

    const container = document.getElementById('container');
    container.appendChild(col);
    document.getElementById('título').value = "";
}

function removerCard(botao) {
    botao.closest('.col-md-3').remove();
}

function Delete() {
    const container = document.getElementById('container');
    container.innerHTML = "";
}