//pelo amor do santo Deus não mexeremos neste bd

function bd() {
  if (!localStorage.getItem("usuarios_padrao")) {
    const usuarios_padrao = [
      {
        id: 1,
        nome: "BRESHOPP",
        username: "breshopp",
        pfp: "assets/logo/logo-reduzida-rosa.svg",
        email: "adm@breshopp.com",
        senha: "admbs",
        adm: 1,
      },
       {
        id: 200,
        nome: "Andrea",
        username: "breshoprj",
        pfp: "pfp200.png",
        email: "andrea@gmail.com",
        senha: "andrea",
        adm: 0,
      },
      {
        id: 200,
        nome: "Breshop RJ",
        username: "breshoprj",
        pfp: "pfp200.png",
        email: "breshoprj@gmail.com",
        senha: "senha200",
        adm: 0,
      },
      {
        id: 201,
        nome: "Brechó da Maria",
        username: "mariabrc",
        pfp: "pfp201.png",
        email: "mariabrc@gmail.com",
        senha: "senha201",
        adm: 0,
      },
      {
        id: 202,
        nome: "Loja Vintage",
        username: "lojavintage",
        pfp: "pfp202.png",
        email: "vintage.loja@gmail.com",
        senha: "senha202",
        adm: 0,
      },
      {
        id: 203,
        nome: "Brechó Ana",
        username: "anabrc",
        pfp: "pfp203.png",
        email: "anabrc@gmail.com",
        senha: "senha203",
        adm: 0,
      },
      {
        id: 204,
        nome: "Breshop Pedro",
        username: "pedrobshp",
        pfp: "pfp204.png",
        email: "pedrobshp@gmail.com",
        senha: "senha204",
        adm: 0,
      },
      {   
        id: 205,
        nome: "Usuario Teste",
        username: "usuarioteste",
        pfp: "pfp204.png",
        email: "usuariobs@gmail.com",
        senha: "usuariobs",
        adm: 0,
      },
      
    ];
    
    localStorage.setItem("usuarios_padrao", JSON.stringify(usuarios_padrao));
  }


  if (!localStorage.getItem("usuarios_ong")) {
    const usuarios_ong = [
      {
        id: 2,
        nome: "ONG1",
        email: "ong1@gmail.com",
        senha: "123",
        aprovado: true,
        adm: 1
      },
    ];
    localStorage.setItem("usuarios_ong", JSON.stringify(usuarios_ong));
  }


  if (!localStorage.getItem("produtos_breshopp")) {
  const produtos_breshopp = [
  {
    id: 1,
    titulo: "Camisa Polo",
    preco: 39.9,
    img: "produto1.jpg",
    descricao:
      "Camisa polo masculina em algodão premium, com gola estruturada, costuras reforçadas e ótimo acabamento. Confortável e versátil, ideal para looks casuais ou alinhados. Disponível em várias cores e tamanhos.",
    ativo: true,
    id_vendedor: 200,
  },
  {
    id: 2,
    titulo: "Saia Jeans",
    preco: 45.99,
    img: "produto2.webp",
    descricao:
      "Saia jeans azul escuro com corte moderno e cintura média. Possui bolsos frontais e traseiros, passantes para cinto e acabamento com lavagem leve. Combina com camisetas e camisas em várias ocasiões.",
    ativo: true,
    id_vendedor: 201,
  },
  {
    id: 3,
    titulo: "Tênis Esportivo",
    preco: 89.5,
    img: "produto3.jpeg",
    descricao:
      "Tênis unissex com design anatômico, tecido respirável e solado antiderrapante. Palmilha confortável e cadarços reforçados. Ideal para caminhadas, treinos ou uso casual, oferecendo conforto e segurança.",
    ativo: true,
    id_vendedor: 202,
  },
  {
    id: 4,
    titulo: "Vestido Floral",
    preco: 59.99,
    img: "produto4.webp",
    descricao:
      "Vestido floral feminino com estampa delicada, tecido leve e toque suave. Tem caimento soltinho, alças reguláveis e decote em V. Ideal para o verão e eventos ao ar livre com estilo e frescor.",
    ativo: true,
    id_vendedor: 201,
  },
  {
    id: 5,
    titulo: "Jaqueta de Couro",
    preco: 120.0,
    img: "produto5.jpg",
    descricao:
      "Jaqueta de couro legítimo com forro térmico, zíper robusto e bolsos funcionais. Gola alta ajustável e acabamento sofisticado. Perfeita para os dias frios com estilo urbano e elegante.",
    ativo: false,
    id_vendedor: 203,
  },
  {
    id: 6,
    titulo: "Calça Skinny",
    preco: 55.0,
    img: "produto6.webp",
    descricao:
      "Calça jeans skinny em algodão com elastano, garantindo ajuste e conforto. Cintura média, bolsos funcionais e costura reforçada. Ideal para looks modernos no dia a dia ou à noite.",
    ativo: true,
    id_vendedor: 200,
  },
  {
    id: 7,
    titulo: "Blusa de Tricô",
    preco: 35.75,
    img: "produto7.jpg",
    descricao:
      "Blusa feminina de tricô com gola redonda, acabamento canelado e toque macio. Modelagem confortável, ótima para dias frios. Pode ser usada sozinha ou com sobreposições elegantes.",
    ativo: true,
    id_vendedor: 204,
  },
  {
    id: 8,
    titulo: "Chapéu Panamá",
    preco: 25.9,
    img: "produto8.webp",
    descricao:
      "Chapéu Panamá em palha sintética leve e resistente, com faixa decorativa e boa ventilação. Estilo clássico para proteção solar. Ideal para looks de verão em passeios, praias ou eventos.",
    ativo: true,
    id_vendedor: 202,
  },
  {
    id: 9,
    titulo: "Óculos de Sol",
    preco: 45.0,
    img: "produto9.jpeg",
    descricao:
      "Óculos com lentes UV400, armação leve e design moderno. Combina com vários estilos e formatos de rosto. Acompanha estojo rígido e flanela, ideal para uso diário ou viagens.",
    ativo: true,
    id_vendedor: 203,
  },
];

    
    
    
    
    localStorage.setItem("produtos_breshopp", JSON.stringify(produtos_breshopp));
  }

  // if(!localStorage.getItem('carrinhos')){
  //   const carrinhos = [
  //     {
  //         idCarrinho: "1", 
  //         idUsuario: "200",   
  //         produtos: [                   
  //           { idProduto: "1", precoUnitario: 39.00 },
  //           { idProduto: "2", precoUnitario: 15.50 },
  //           { idProduto: "3",  precoUnitario: 120.00 }
  //         ]                      
  //     },
  //     {
  //       idCarrinho: "2", 
  //       idUsuario: "200",   
  //       produtos: [                   
  //         { idProduto: "1", precoUnitario: 39.00 },
  //         { idProduto: "2", precoUnitario: 15.50 },
  //         { idProduto: "3",  precoUnitario: 120.00 }
  //       ]                      
  //   }
  //   ]
  //   localStorage.setItem('carrinhos', JSON.stringify(carrinhos));
  // }
}

bd();
