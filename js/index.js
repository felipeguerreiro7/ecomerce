startStore = () => {
    let containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML += `       
        <div class="produto-single card">
            <img src="`+val.img+`" class="card-img-top"/>
            <div class="card-body">
            <p class="card-title">`+val.nome+`</p>
            <p class="card-text">`+val.preco+`</p>
            <a key="`+val.id+`" href="#" class="btn btn-primary btn-sm">Adicionar ao Carrinho!</a>
            </div>
        </div>
        `
    })
}

startStore();