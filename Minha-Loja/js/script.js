const produtos = [
    {
        nome:"caneta",
        preco:4.99
    },
    {
        nome:"borracha",
        preco:2.58
    },
    {
        nome:"caderno",
        preco:25.90

    }

];

console.log(produtos[0].nome);
console.log(produtos[2].nome);
console.log(produtos[1]);

const produtoJSON = JSON.stringify(produto[1]);
console.log(produtoJSON)

const produtoObjeto= JSON.parse(produtoJSON);
console.log(protudoObjeto);

const produtosbaratos = produtos.filter(
    produto => produto.preco<5
);

for(let i=0;i<produtosbaratos.length;i++){
    console.log(`Nome: ${produtosBaratos[i].nome}- Preço: ${produtosBaratos}`)
}

