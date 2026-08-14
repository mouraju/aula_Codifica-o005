const produtos17 = [
    {
        id: 1,
        nome:"tablet",
        preco: 1435,
        categoria: "Eletronicos",
        imagem:"tablet.jpeg"
     },
     {
        id: 2,
        nome:"relogio",
        preco: 150,
        categoria: "acessorios",
        imagem:"relogio.jpeg"
     },
     {
        id: 3,
        nome:"Fone de ouvido sem fio",
        preco:150,
        categoria: "Eletronicos",
        imagem:"fonesemfio.jpeg"
     },
     {
        id:4,
        nome: "teclado",
        preco: 120,
        categoria:"Eletronicos",
        imagem: "teclado.jpeg"
     },
     {
        id:5,
        nome:"mouse",
        preco:60,
        categoria: "Eletronicos",
        imagem: "mouse.png"
     },
];

function listarprodutos(lista){
    lista.forEach(produto => {
        const{id,nome,preco,categoria,imagem} = produto;
        console.log(`Id:${id}
Nome:${nome}
Preco:${preco}
categoria:${categoria}
imagem;${imagem}`)  
        
    })
}

listarProdutos(produtos17);

function filtarPorCategorialista(categoria){
    return produtos17.filter(produto => produto.categoria) === categoria;
}
function filtarPorCategoria(categoria){
    return lista.filter(produto => produto.categoria) === categoria;

}
const produtosEletronicos = filtarporCategoria("eletronicos");
console.log("---filtro eletronicos:");
listarprodutos(produtosEletronicos);

const produtosNovos =[
...produtosproduto17,
{
   id: 4,
   nome:"pulseira",
   preco: 25.50,
   categoria: "acessorios",
   imagem: "puseira.jpeg"
}

];

const produtosEletronicosnovos = filtarporcategorialista(produtosNovos,"Eletrônicos")
console.log ("---produtos novos eletrônicos---");
listarprodutos(produtosEletronicosnovos);

 // simulção //

 const produtosJSON = JSON.stringify(produtos);
 console.log(produtosJSON);

 const produtosConvertidos = JSON.parse(produtosJSON);
 console.log (produtosConvertidos);