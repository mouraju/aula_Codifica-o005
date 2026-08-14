let productList;
let cartList;
let totalEl;


let cartCount;
let miniList;
let miniTotal;

let carrinho = [];

//dados dos produtos//
const produtos = [
{
    id:1,
    Nome: "Borracha",
    Preco: 4.50,
    Categoria: "Vestidos",
    Imagem:"",
},
{
    id:2,
    Nome: "lápis de cor",
    Preco: 10.00,
    Categoria: "Casacos",
    Imagem: "casacos",
},
{
    id:3,
    Nome: "Caderno",
    Preco: 25.90,
    Categoria:"Calças",
},
];

// validação do formulario//
const form = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Formulário enviado com sucesso!";
        mensagem.style.color = "green";
    }
});

//TO-DO LIST//
const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista-tarefa");

//carregar o localstorage//
function rendenizarTarefas () {
    lista.innerHTML = "";

    rendenizarTarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = "Tarefa";

        
})

}

//rendenizar produtos
function rendenizarProdutos () {
    productList.innerHTML = "";
    produtos.forEach(produto => {

        const card= document.createElement("article");
        card.classList.add("product-card");

        card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
        <button>Adicionar ao carrinho</button>
        `;
        card.querySelector("button").addEventListener("click", () =>{
            adicionarAocarrinho(produto.id);
        });
        productList.appendchild(card);

    });
    
}

// adicionar produto ao carrinho//
function adicionarAocarrinho (id) {
    const produto = produtos.find (p=> p.id === id);
    carrinho.push(produto);
    salvarCarrinho();
}

// rendenizar carrinho principal//
function rendenizarCarrinho() {
    cartList.innerHTML = "";
    let total = 0;
    carrinho.forEach((item, index) => {
        total+= item.preco;
        const li = document.createElement("li");

        li.innerHTML = `
        ${item.nome} - R${item.preco}
        <button>Remover</button>
        `;

        li.querySelector("button").addEventListener("click", () =>{
            carrinho.splice(index,1);
            salvarCarrinho ()
        });

        cartList.appendchild(li);
    });

    totalEl.textContent = `Total: R$ ${total}`;
}

// mini carrinho//
function atualizarMiniCarrinho() {
    cartCount.textContent = carrinho.length;
    miniList.innerHTML = "";

    let total= 0;
    carrinho.forEach(item => {
        total += item.preco;
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco}`;
        miniList.appendchild(li);
    });
    miniTotal.textContent = `Total: R$ ${total}`;
}

//finalizar compra//

function finalizarCompra () {
    if (carrinho.length === 0) {
        mensagemCompra.textContent = "Seu carrinho está vazio!";
        mensagemCompra.style.color = "red";
        return
    }

    mensagemCompra.textContent = "Compra realizada com sucesso!";
    mensagemCompra.style.color = "green";

    carrinho = [];
    salvarCarrinho();
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    rendenizarCarrinho();
    atualizarMiniCarrinho();
}

document.addEventListener("DOMContentLoaded", () => {
    productList = document.getElementById("product-list");
    cartList = document.getElementById("cart-list");
    totalEl = document.getElementById("total");

    cartCount = document.getElementById("cart-count");
    miniList = document.getElementById("mini-cart-list");
    miniTotal = document.getElementById("mini-total");

    btnFinalizar = document.getElementById("finalizar-compra");
    mensagemCompra = document.getElementById("mensagem-compra");

    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    rendenizarProdutos();
    rendenizarCarrinho();
    atualizarMiniCarrinho();

    btnFinalizar.addEventListener("click", finalizarCompra);
});