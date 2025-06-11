const params = new URLSearchParams(window.location.search);
const id = params.get('id');
let usuario_logado = JSON.parse(localStorage.getItem("usuario_logado"));
const produtos_bd = JSON.parse(localStorage.getItem("produtos_breshopp"));
const usuarios_padrao = JSON.parse(localStorage.getItem("usuarios_padrao"));

console.log(localStorage)


document.addEventListener("DOMContentLoaded", function (){
    function sweetAlert(title, text, icon) {
      Swal.fire({
        title: title,
        text: text,
        icon: icon,
      });
    }

    function adicionarCarrinho(id) {
      // 1 - pegar info do produto e organizar num obj
      const produto = produtos_bd.find((p) => p.id === parseInt(id));
      const produtoAdicionado = {
        idProduto: produto.id,
        nomeProduto: produto.titulo,
        img: produto.img,
        precoUnitario: produto.preco,
      };

      // 2 - pegar carrinho do usuario e adicionar esse produto
      const carrinho = JSON.parse(localStorage.getItem("carrinhos")) || [];
      let carrinho_usuario = carrinho.find(
        (c) => c.id_usuario === usuario_logado.id
      );

      if (carrinho_usuario) {
        carrinho_usuario.produtos.push(produtoAdicionado);

        // Substitui o carrinho antigo pelo atualizado
        let carrinhos = carrinho.filter((c) => c.id_usuario !== usuario_logado.id);
        carrinhos.push(carrinho_usuario);

        // 3 - atualizar no localStorage
        localStorage.setItem("carrinhos", JSON.stringify(carrinhos));
      } else {
        // Se o usuário ainda não tem carrinho, cria um novo
        carrinho.push({
          id: carrinho.length + 1, 
          id_usuario: parseInt(usuario_logado.id),
          produtos: [produtoAdicionado],
        });

        localStorage.setItem("carrinhos", JSON.stringify(carrinho));
      }
      console.log(usuario_logado.id);

      console.log(JSON.stringify(localStorage.getItem('carrinhos')))
      sweetAlert("Sucesso!", "Produto adicionado ao carrinho!", "success");
    }
    


const produtos_div = document.getElementById("produtos_div");

console.log(produtos_bd[id - 1]['img'])
// Título do produto
const titulo = document.querySelector('.title');
titulo.innerHTML = produtos_bd[id-1]['titulo']

// Categorias
const categorias = document.querySelector('.categorias');

// Descrição do produto
const descricao = document.querySelector('.descricao');
descricao.innerHTML = produtos_bd[id-1]['descricao']
// Preço
const preco = document.querySelector('.preco');
preco.innerHTML = 'R$ ' + produtos_bd[id - 1]['preco'].toFixed(2).replace('.', ',') 
preco.innerHTML += '<small class="!font-sm">no pix</small>'

// Estado
const estado = document.querySelector('.tamanho-circle.bg-pink-300');

//imagem
const imagem = document.querySelector('.produto-img-div');
imagem.style.backgroundImage = `url(assets/img_products/${produtos_bd[id - 1]['img']})`

// Tamanho
const tamanho = document.querySelector('.tamanho-circle.bg-slate-300');

// Nome da loja
const nomeLoja = document.querySelector('.produto-loja-nome');

// Imagens do carrossel (todas)
const divImagem = document.querySelector(".produto-img-div");
divImagem.style.backgroundImage = produtos_bd[id - 1]['img'];


// Botão comprar
const botaoComprar = document.querySelector('.comprar');
botaoComprar.addEventListener('click', function(){
if(usuario_logado){
    adicionarCarrinho(id)

    } else {
        window.location.href = 'login.html'
}
});
// Botão adicionar ao carrinho


// ID do produto pela URL
const params = new URLSearchParams(window.location.search);








function getProdutos(){

    produtos_div.innerHTML = ""
    for(let i = 0; i < produtos_bd.length; i++){
        let descricaoTexto = produtos_bd[i]["descricao"];
        if (descricaoTexto.length > 70) {
          descricaoTexto = descricaoTexto.substring(0, 70) + "...";
        }
        produtos_div.innerHTML += `
        <div class="swiper-slide h-full">
            <div class="p-3 shadow-md border-none rounded-2xl w-full max-w-sm min-h-[200px] bg-custom-white md:h-[40rem] md:scale-90 ">
                    <div class="flex flex-row gap-2 items-center pb-2 pt-2">
                        <div
                        class="w-10 h-10 bg-cover rounded-full"
                        style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&s');">
                        </div>
                        <p class="text-md m-0 font-bold">
                        @LIMONADA
                        </p>
                    </div>
                    <div
                        class="rounded-2xl mt-2 h-[26rem] bg-no-repeat bg-cover bg-center md:h-[24rem]"
                        style="background-image: url('assets/img_products/${produtos_bd[i]["img"]}');">
                    </div>
                    <div class="px-0 mt-3  pl-1 pr-1">
                        <h5 class="flex flex-row justify-between items-center text-xl font-bold">
                        <span class="produto-title">${
                          produtos_bd[i]["titulo"]
                        }</span>
                        <span class="text-green-600">R$${produtos_bd[i][
                          "preco"
                        ].toFixed(2)}</span>
                        </h5>
                        <p class="text-sm text-gray-700 mt-1">${descricaoTexto}</p>
                        <input type="hidden" value="${
                          produtos_bd[i]["id"]
                        }" class="id_produto_input">
                    <a onclick="vermais(${
                      produtos_bd[i]["id"]
                    })" class=" mb-3 cursor-pointer botao_vermais block text-center w-full mt-3 font-bold !text-rose-700 !border !border-rose-600 !rounded-xl !py-2 hover:!bg-rose-600 hover:!text-white transition-all duration-200 ">
                        VER MAIS
                        </a>
                    </div>
                </div>
                </div>
    
            `;
    }
    
    }

       
getProdutos();

})



  
      


