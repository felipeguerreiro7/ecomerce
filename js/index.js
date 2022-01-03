startStore = () => {
    let containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML += `       
        <div class="produto-single">
            <img src"`+val.img+`"/>
            <p>`+val.nome+`</p>
            <p>`+val.preco+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao Carrinho!</a>
        </div>
        `
    })
}

startStore();