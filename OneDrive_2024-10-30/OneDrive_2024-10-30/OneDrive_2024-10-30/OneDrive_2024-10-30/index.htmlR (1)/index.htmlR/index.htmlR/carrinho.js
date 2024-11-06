
// Função para carregar os itens do carrinho na página carrinho.html
function carregarCarrinho() {
    const carrinhoItens = document.getElementById('carrinho-itens');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let total = 0;
  
    carrinhoItens.innerHTML = '';
    carrinho.forEach(produto => {
      const subtotal = produto.preco * produto.quantidade;
      total += subtotal;
  
      const linha = document.createElement('tr');
      linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>R$ ${produto.preco.toFixed(2)}</td>
        <td>R$ ${subtotal.toFixed(2)}</td>
        <td><button onclick="removerDoCarrinho('${produto.id}')">Remover</button></td>
      `;
      carrinhoItens.appendChild(linha);
    });
  
    document.getElementById('total-carrinho').innerText = `R$ ${total.toFixed(2)}`;
  }
  
  // Função para remover um item do carrinho
  function removerDoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(produto => produto.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
  }
  
  // Carrega o carrinho ao abrir a página do carrinho
  if (window.location.pathname.includes('carrinho.html')) {
    carregarCarrinho();
  }