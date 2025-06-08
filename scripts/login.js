document.addEventListener("DOMContentLoaded", function () {


  function sweetAlert(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }

  function confirmaDadosPreenchidosONG1() {
    const inputUploadCertidao = document.getElementById("certidao_input");
    const inputNome = document.getElementById("inputNomeOng").value;
    const inputCnpj = document.getElementById("inputCnpjOng").value;
    if (inputNome.trim == "" || inputNome == "" || inputNome == null) {
      sweetAlert("Atenção!", "Preencha o campo Nome da ONG!", "warning");
      return false;
    } else if (
      inputCnpj == "" ||
      inputCnpj.trim == "" ||
      inputCnpj == null ||
      inputCnpj.length != 14
    ) {
      sweetAlert("Atenção!", "Preencha o campo CNPJ da ONG!", "warning");
      return false;
    } else if (inputUploadCertidao.files.length == 0) {
      sweetAlert("Atenção!", "Faça o upload do documento pedido!", "warning");
      return false;
    }
    return true;
  }

  function confirmaDadosPreenchidosONG2() {
    const inputUploadRg = document.getElementById("rg_input");

    const inputNome = document.getElementById("inputNomeRL").value;
    const inputEmail = document.getElementById("inputEmailRL").value;
    const inputRG = document.getElementById("inputRgRL").value;
    if (inputNome.trim == "" || inputNome == "" || inputNome == null) {
      sweetAlert(
        "Atenção!",
        "Preencha o campo Nome do representante",
        "warning"
      );
      return false;
    } else if (
      inputEmail == "" ||
      inputEmail.trim == "" ||
      inputEmail == null ||
      !inputEmail.includes("@")
    ) {
      sweetAlert(
        "Atenção!",
        "Preencha o campo Email do representante",
        "warning"
      );
      return false;
    } else if (
      inputRG == "" ||
      inputRG.trim == "" ||
      inputRG == null ||
      inputRG.length != 9
    ) {
      sweetAlert("Atenção!", "Preencha o campo RG do representante", "warning");
      return false;
    } else if (inputUploadRg.files.length == 0) {
      sweetAlert("Atenção!", "Faça o upload do arquivo pedido", "warning");
      return false;
    }
    return true;
  }

  function validaCampos(nome, email, senha) {
    if (nome.trim() == "" || nome == "" || nome == null) {
      sweetAlert("Atenção!", "Preencha o campo Nome corretamente", "warning");
      return false;
    } else if (
      email == "" ||
      email.trim == "" ||
      email == null ||
      !email.includes("@")
    ) {
      sweetAlert("Atenção!", "Preencha o campo Email corretamente", "warning");
      return false;
    } else if (
      senha == "" ||
      senha.trim == "" ||
      senha == null ||
      senha.length < 3
    ) {
      sweetAlert("Atenção!", "Preencha o campo Senha corretamente", "warning");
      return false;
    }
    return true;
  }

  //script pra os botoes não tenho conta

  const botaoNaoTenhoConta = document.getElementById("botaoNaoTenhoConta");
  const telaLogin = document.getElementById("telaLogin");
  const selecionarOpcaoTela = document.getElementById("telaSelecionarOpcao");

  botaoNaoTenhoConta.addEventListener("click", function () {
    if (telaLogin) {
      telaLogin.classList.add("hidden");
    }
    if (selecionarOpcaoTela) {
      selecionarOpcaoTela.classList.remove("hidden");
    }
  });

  //script pra tipo de usuario

  const botaoConfirmarOpcao = document.getElementById("botaoConfirmarOpcao");
  const cadastroBrecho = document.getElementById("telaCadastroBrecho");
  const cadastroONG1 = document.getElementById("telaCadastroONG1");

  botaoConfirmarOpcao.addEventListener("click", function () {
    const selecionado = document.querySelector(
      'input[name="tipoUsuario"]:checked'
    );
    if (selecionado) {
      selecionarOpcaoTela.classList.add("hidden");

      if (selecionarOpcaoTela) {
        if (selecionado.value == "brecho") {
          cadastroBrecho.classList.remove("hidden");
        } else {
          cadastroONG1.classList.remove("hidden");
        }
      }
    } else {
      sweetAlert(
        "Campos obrigatórios",
        "Selecione um tipo de usuário",
        "error"
      );
    }
  });

  //script pra todos os botoes já tenho conta
  const botoesJaTenhoConta = document.querySelectorAll(".botaojaTenhoConta");

  botoesJaTenhoConta.forEach(function (botao) {
    botao.addEventListener("click", function () {
      window.location.reload();
    });
  });

  //script para o botao de enviar arquivos da certidao
  const botaoUploadCertidao = document.getElementById(
    "certidao_regularidade_button"
  );
  const inputUploadCertidao = document.getElementById("certidao_input");
  const uploadMessage = document.getElementById("upload-2");
  const uploadSuccessMessage = document.getElementById("upload-right-2");
  const uploadErrorMessage = document.getElementById("upload-wrong-2");

  botaoUploadCertidao.addEventListener("click", function () {
    inputUploadCertidao.click();
  });

  inputUploadCertidao.addEventListener("change", function () {
    if (inputUploadCertidao.files.length > 0) {
      uploadMessage.classList.add("hidden");
      uploadSuccessMessage.classList.remove("hidden");
      uploadErrorMessage.classList.add("hidden");
    }
  });

  //script para o botao de enviar arquivos do RG
  const botaoUploadRg = document.getElementById("rg_button");
  const inputUploadRg = document.getElementById("rg_input");
  const uploadMessage1 = document.getElementById("upload-1");
  const uploadSuccessMessage1 = document.getElementById("upload-right-1");
  const uploadErrorMessage1 = document.getElementById("upload-wrong-1");

  botaoUploadRg.addEventListener("click", function () {
    inputUploadRg.click();
  });

  inputUploadRg.addEventListener("change", function () {
    if (inputUploadRg.files.length > 0) {
      uploadMessage1.classList.add("hidden");
      uploadSuccessMessage1.classList.remove("hidden");
      uploadErrorMessage1.classList.add("hidden");
    }
  });

  //script para trocar de tela do rg e da finalização
  const botaoConfirmarCertidao = document.getElementById(
    "botaoConfirmarCertidao"
  );
  const telaCertidao = document.getElementById("telaCadastroONG1");
  const telaRG = document.getElementById("telaCadastroONG2");
  const telaConfirmacao = document.getElementById("telaConfirmacao");
  const botaoConfirmarRG = document.getElementById("botaoConfirmarRG");

  botaoConfirmarCertidao.addEventListener("click", function () {
    if (telaCertidao && confirmaDadosPreenchidosONG1()) {
      telaCertidao.classList.add("hidden");
    }
    if (telaRG && confirmaDadosPreenchidosONG1()) {
      telaRG.classList.remove("hidden");
    }
  });

  botaoConfirmarRG.addEventListener("click", function () {
    if (telaRG && confirmaDadosPreenchidosONG2()) {
      telaRG.classList.add("hidden");
    }
    if (telaConfirmacao && confirmaDadosPreenchidosONG2()) {
      telaConfirmacao.classList.remove("hidden");
    }
  });

  //script criar de perfil comum
  const inputEmail = document.getElementById("inputEmailPerfil");
  const inputNome = document.getElementById("inputNomePerfil");
  const inputSenha = document.getElementById("inputSenhaPerfil");
  const botaoCriarPerfil = document.getElementById("botaoCriarPerfil");

  botaoCriarPerfil.addEventListener("click", function () {
    if (validaCampos(inputNome.value, inputEmail.value, inputSenha.value)) {
      tamanho = localStorage.getItem("usuarios_padrao").length + 1
      const novo = {
        id: parseInt(tamanho),
        nome: inputNome.value.trim(),
        email: inputEmail.value.trim(),
        senha: inputSenha.value,
        
        adm: 0
      };

      let usuarios = JSON.parse(localStorage.getItem("usuarios_padrao")) || [];
      const jaExiste = usuarios.some((usuario) => usuario.email === novo.email);

      if (jaExiste) {
        sweetAlert("Atenção", "Email já cadastrado!", "warning");
        return;
      }
      usuarios.push(novo);
      localStorage.setItem("usuarios_padrao", JSON.stringify(usuarios));
      sweetAlert("Sucesso!", "Sua conta foi criada com sucesso", "success");
      setTimeout(function() {
        window.location.reload();
      }, 1500);
      
      console.log(usuarios);
    }
  });

  //script login

  const botaoLogar = document.getElementById("botaoLogar");

  botaoLogar.addEventListener("click", function () {
    const inputEmailLogin = document
      .getElementById("inputEmailLogin")
      .value.trim();
    const inputSenhaLogin = document
      .getElementById("inputSenhaLogin")
      .value.trim();

    let usuarios = JSON.parse(localStorage.getItem("usuarios_padrao")) || [];

    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email === inputEmailLogin && usuario.senha === inputSenhaLogin
    );

    if (usuarioEncontrado) {
      Swal.fire("Sucesso!", "Seu login foi realizado com sucesso!", "success").then(() => {
        localStorage.setItem("usuario_logado", JSON.stringify(usuarioEncontrado));
      
        if (usuarioEncontrado.adm == 1) {
          window.location.href = "adm/adm.html";
        } else {
          window.location.href = "index.html";
        }
      });
      
      return;
    } else {
      sweetAlert(
        "Ops!",
        "Seu login não foi encontrado em nossa base de dados",
        "error"
      );
    }
  });
  
  console.log(localStorage)
}); //fim do document onload
