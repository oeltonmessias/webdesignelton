let produto = 
{
    nome: "Celular",
    preco: 1200,
    quantidade: 3,
    
    calcularTotal: function() 
    {
        return this.preco * this.quantidade;
    }
};

console.log(`O total do produto é: R$ ${produto.calcularTotal()}`);
// Saída: O total do produto é: R$ 3600
