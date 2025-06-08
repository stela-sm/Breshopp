document.addEventListener("DOMContentLoaded", function () {
    const produtos_div = document.getElementById("produtos_div");
    const produtos_bd = JSON.parse(localStorage.getItem("produtos_breshopp"))
    const usuarios_padrao = JSON.parse(localStorage.getItem("usuarios_padrao"))
  
      
   
function getProdutos(){
produtos_div.innerHTML = ""
for(let i = 0; i < produtos_bd.length; i++){
    let descricaoTexto = produtos_bd[i]["descricao"];
    if (descricaoTexto.length > 70) {
      descricaoTexto = descricaoTexto.substring(0, 70) + "...";
    }

    produtos_div.innerHTML += `
        <div class="p-3 shadow-md border-none rounded-2xl w-full max-w-sm min-h-[200px] bg-custom-white md:h-[40rem] md:scale-90">
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
                    class="rounded-2xl mt-2 h-[26rem] bg-no-repeat bg-cover bg-center"
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
                })" class="cursor-pointer botao_vermais block text-center w-full mt-3 font-bold text-rose-700 border border-rose-600 rounded-xl py-2 hover:bg-rose-600 hover:text-white transition-colors duration-200">
                    VER MAIS
                    </a>
                </div>
            </div>

        `;
}

}
getProdutos();



})




