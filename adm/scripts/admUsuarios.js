const usuarios_padrao = JSON.parse(localStorage.usuarios_padrao)
const tabela = document.getElementById("tabelaConteudo")
const tabelaCabecalho = document.getElementById('tabelaCabecalho');
const botoesMudaTabela = document.querySelectorAll(".link_tabela");
const botoesEdit = document.querySelectorAll(".edit_button_user");
console.log(localStorage)

function sweetAlert(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    backdrop: false,
  });
}



function criarUsuario(){
  const nome = document.getElementById('novo-nome').value
  const username = document.getElementById("novo-username").value;
  const email = document.getElementById('novo-email').value
  const senha = document.getElementById('nova-senha').value
  const adm = document.getElementById('novo-adm').checked;

  novoUser = {
    id: parseInt(usuarios_padrao.length + 1),
    nome: nome,
    username: username,
    email: email,
    senha: senha,
    adm: adm?1:0
  }
  usuarios_padrao.push(novoUser)
  localStorage.setItem('usuarios_padrao', JSON.stringify(usuarios_padrao))
  $("#modalAddUsuario").modal("hide");
  sweetAlert('Sucesso', 'Novo usuário criado com sucesso!', 'success')
  getUsuariosPadrao();
}

document
  .getElementById("novoUsuario")
  .addEventListener("click", function () {
    criarUsuario();
  });

function salvarEdicaoUsuario(id) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios_padrao")) || [];
  const userIndex = usuarios.findIndex(u => u.id == id);

  if (userIndex !== -1) {
    
    usuarios[userIndex].nome = document.getElementById("nome_edit").value;
    usuarios[userIndex].username = document.getElementById("username_edit").value;
    usuarios[userIndex].email = document.getElementById("email_edit").value;

    localStorage.setItem("usuarios_padrao", JSON.stringify(usuarios));

    sweetAlert("Sucesso", "Usuário editado com sucesso!", "success");
     window.location.reload();
  } else {
    sweetAlert("Erro", "Usuário não encontrado", "error");
  }
}


function configurarModalEdit(id){
  for(let i = 0; i < usuarios_padrao.length; i++) {
    if(usuarios_padrao[i]['id'] == id){
      if (usuarios_padrao[i]['adm'] == 1){
        document.getElementById('nome_edit').value = usuarios_padrao[i]['nome'] + ' (Administrador)';
      }else{
        document.getElementById('nome_edit').value = usuarios_padrao[i]['nome'];
      }
      getDados = usuarios_padrao[i]

  document.getElementById('username_edit').value = getDados['username']; 
  document.getElementById('email_edit').value = getDados['email']; 
  
  document.getElementById("salvarMudancas").addEventListener("click", function(){

    salvarEdicaoUsuario(id)
  })

  break
    }
}
}


  
  



function getUsuariosPadrao() {
 tabela.innerHTML = ''
 tabelaCabecalho.innerHTML = ''
    tabelaCabecalho.innerHTML = `
    <tr>
      <th class="thmain">ID</th>
      <th class="thmain">Usuário</th>
      <th class="thmain">Email</th>
      <th class="thmain">Senha</th>
      <th class="w-10"></th>
    <th class="text-xl">
  <span class="hover:text-green-600 hover:scale-110 cursor-pointer transition-all" data-toggle="modal" data-target="#modalAddUsuario">+</span>
</th>

    </tr>
  `;

  for(let i = 0; i < usuarios_padrao.length; i++) {
   
    tabela.innerHTML += `
      <tr class="bg-gray-100 border-b-4 border-white rounded-xl p-4">
        <td class="tdmain">${usuarios_padrao[i].id}</td>
        <td class="tdmain">
          <div class="flex flex-row items-center gap-2">
            <div class="pfp w-10 h-10 bg-cover rounded-full" style="background-image: url('https://i.pinimg.com/originals/f8/24/93/f824931fcf3c3853a90c1ebab26f513b.jpg')"></div>
            <p class="h-10 flex items-center">${usuarios_padrao[i].nome}</p>
          </div>
        </td>
        <td class="tdmain">${usuarios_padrao[i].email}</td>
        <td class="tdmain">**********</td>
        <td class"hidden"><input type="hidden" class="id_value" value="${usuarios_padrao[i].id}"></td>
        <td class="w-10 delete_button_user "><i class="delete_button_user hover:scale-125 hover:text-red-600 transition-all cursor-pointer fa-solid fa-xmark"></i></td>
        <td class="w-10 edit_button_user"><i class="edit_button_user hover:scale-125 hover:text-yellow-400 transition-all cursor-pointer fa-solid fa-pen" data-toggle="modal" data-target="#modalEdit"></i></td>
      </tr>
    `;
  }
}

getUsuariosPadrao()



tabela.addEventListener("click", function(event) {
  if (event.target && event.target.classList.contains("edit_button_user")) {
    
    const hiddenInput = event.target.closest("tr").querySelector(".id_value");
    const idValue = hiddenInput ? hiddenInput.value : null;
    console.log(idValue);
    configurarModalEdit(idValue);

  }

  if (event.target && event.target.classList.contains("delete_button_user")) {
    
    const hiddenInput = event.target.closest("tr").querySelector(".id_value");
    const idValue = hiddenInput ? hiddenInput.value : null;
    console.log(idValue);
    deleteUser(idValue);

  }
});



function deleteUser(id) {
  Swal.fire({
    title: "Tem certeza que deseja excluir esse usuário?",
    text: "Essa ação não pode ser desfeita.",
    icon: "warning",
    confirmButtonText: "Sim, continuar",
    cancelButtonText: "Não, cancelar",
    showCancelButton: true,
    backdrop: false,
  }).then((result) => {
    if (result.isConfirmed) {
      let usuarios_padrao =
        JSON.parse(localStorage.getItem("usuarios_padrao")) || [];
      let usuarios_update = [];

      for (let i = 0; i < usuarios_padrao.length; i++) {
        if (usuarios_padrao[i].id != id) {
          usuarios_update.push(usuarios_padrao[i]);
        }
      }

      localStorage.setItem("usuarios_padrao", JSON.stringify(usuarios_update));
      window.location.reload()
    } else {
      return;
    }
  });
}


// botoesMudaTabela.forEach(function (botao) {
//   botao.addEventListener("click", function () {
//     const tabela = document.getElementById("tabela");

//     // Exemplo: muda o texto da tabela
//     tabela.innerHTML = "Você clicou no botão: " + this.innerText;
//   });
// });



//   const inputImagem = document.getElementById('alter_pfp');
//   const pfpDiv = document.querySelector('.pfp');
  




