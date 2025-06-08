document.addEventListener("DOMContentLoaded", function () {
  let carrinho = JSON.parse(localStorage.getItem("carrinhos")) || [];
  const carrinhoVazio = document.getElementById("carrinhoVazio");
  const carrinhoCheio = document.getElementById("carrinhoCheio");
  const total = document.getElementById("total");
  const finalizarCompra = document.getElementById("finalizarCompra")
  const subTotal = document.getElementById("subTotal");
  const frete = document.getElementById("frete");
  const produtos_bd = JSON.parse(localStorage.getItem("produtos_breshopp"));
  const usuarios_padrao = JSON.parse(localStorage.getItem("usuarios_padrao"));
  const usuario_logado =
    JSON.parse(localStorage.getItem("usuario_logado")) || [];


      function sweetAlert(title, text, icon) {
        Swal.fire({
          title: title,
          text: text,
          icon: icon,
        });
      }
  
  let produtos = carrinho.find(
    (carrinho) => carrinho.id_usuario === usuario_logado.id
  );
  if (!usuario_logado || !produtos || produtos["produtos"][0] === undefined) {
    carrinhoVazio?.classList.remove("hidden");
    carrinhoCheio?.classList.add("hidden");
  } else {
    carrinhoCheio?.classList.remove("hidden");
    carrinhoVazio?.classList.add("hidden");
  }

  function carregaProdutosCarrinho(id) {
    carrinho = JSON.parse(localStorage.getItem("carrinhos")) || [];
    let carrinho_usuario = carrinho.find((c) => c.id_usuario === id);
    const produtoElement = document.getElementById("produtosCarrinho");
    let subtotal = 0;

    if (!carrinho_usuario) return;

    carrinho_usuario.produtos.forEach((produto) => {
      subtotal += parseFloat(produto.precoUnitario);
      produtoElement.innerHTML += `
        <div class="flex justify-between items-start pb-4 mb-4">
          <div class="flex-shrink-0 mr-4 mt-1">
            <img src="assets/img_products/${produto.img}" alt="${
        produto.nomeProduto
      }"
              class="w-16 h-16 object-cover rounded-md">
          </div>
          <div class="flex-grow">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-semibold text-gray-800">${
                  produto.nomeProduto
                }</p>
                <p class="text-sm text-gray-500">de ModaModa</p>
              </div>
              <div class="flex items-center space-x-4">
                <span class="font-bold text-gray-800">R$ ${produto.precoUnitario
                  .toFixed(2)
                  .replace(".", ",")}</span>
                <button
                  data-id="${produto.idProduto}"
                  class="deletarProduto text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="border-b border-gray-200 mt-4"></div>
          </div>
        </div>
      `;
    });
    let frete = 10.00

    subTotal.textContent = "R$" + subtotal.toFixed(2).replace(".", ",");
    frete.textContent = "R$" +  frete;
    total.textContent = "R$" + (subtotal + frete).toFixed(2).replace(".", ",");

    // Adiciona os listeners DEPOIS de renderizar os botões
    document.querySelectorAll(".deletarProduto").forEach((botao) => {
      botao.addEventListener("click", function () {
        const idProdutoRemover = parseInt(this.getAttribute("data-id"));
        let carrinhos = JSON.parse(localStorage.getItem("carrinhos")) || [];
        let carrinho_usuario = carrinhos.find((c) => c.id_usuario === id);
        if (!carrinho_usuario) return;

        carrinho_usuario.produtos = carrinho_usuario.produtos.filter(
          (p) => p.idProduto !== idProdutoRemover
        );

        carrinhos = carrinhos.map((c) =>
          c.id_usuario === id ? carrinho_usuario : c
        );

        localStorage.setItem("carrinhos", JSON.stringify(carrinhos));
        window.location.reload();

      });
    });
  }



  carregaProdutosCarrinho(usuario_logado.id);

  finalizarCompra.addEventListener("click", function() {
    sweetAlert("Compra finalizada", "Obrigada apoiar nossa causa!", "success");
    
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  
    const carrinhoFiltrado = carrinho.filter(
      (item) => item.id_usuario !== usuario_logado.id
    );
  
    localStorage.setItem("carrinhos", JSON.stringify(carrinhoFiltrado));
    
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  });
})