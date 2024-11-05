let endereco = 
{
    rua: "Avenida Pereira Inácio",
    numero: 195,
    bairro: "Centro",
    cidade: "Sorocaba"
};

for (let prop in endereco)
{
    console.log(`${prop}: ${endereco[prop]}`);
}
