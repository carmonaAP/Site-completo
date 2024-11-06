// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(elemento) {
    const produto = {
      id: elemento.parentElement.getAttribute('data-id'),
      nome: elemento.parentElement.getAttribute('data-nome'),
      preco: parseFloat(elemento.parentElement.getAttribute('data-preco')),
      quantidade:1
    };
  
    let carrinho = JSON.parse(localStorage.getItem('/carrinho.html')) || [];
  
    const produtoExistente = carrinho.find(item => item.id === produto.id);
    if (produtoExistente) {
      produtoExistente.quantidade++;
    } else {
      carrinho.push(produto);
    }
  
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} foi adicionado ao carrinho!`);
  }
  