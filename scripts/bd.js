//pelo amor do santo Deus não mexeremos neste bd

function bd() {
  if (!localStorage.getItem("usuarios_padrao")) {
    const usuarios_padrao = [
      {
        id: 1,
        nome: "BRESHOPP",
        username: "breshopp",
        pfp: "assets/logo/logo-reduzida-rosa.svg",
        email: "bs@gmail.com",
        senha: "admbs",
        adm: 1,
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
            "Camisa polo masculina confeccionada em algodão premium de alta qualidade, com gola estruturada, costuras reforçadas e acabamento impecável. Combina conforto, elegância e praticidade, sendo ideal para compor looks casuais ou mais alinhados no dia a dia. Disponível em diversas cores e tamanhos.",
          ativo: true,
          id_vendedor: 200,
        },
        {
          id: 2,
          titulo: "Saia Jeans",
          preco: 45.99,
          img: "produto2.webp",
          descricao:
            "Saia jeans azul escuro com corte moderno e cintura média, perfeita para valorizar a silhueta. Possui bolsos funcionais frontais e traseiros, passantes para cinto e acabamento com lavagem leve. Ideal para usar com camisetas, camisas ou blusas, tanto no trabalho quanto em momentos de lazer.",
          ativo: true,
          id_vendedor: 201,
        },
        {
          id: 3,
          titulo: "Tênis Esportivo",
          preco: 89.5,
          img: "produto3.jpeg",
          descricao:
            "Tênis esportivo masculino e feminino com design anatômico, leveza excepcional e tecido respirável que proporciona maior ventilação. Solado emborrachado antiderrapante, palmilha de espuma de alta absorção e cadarços reforçados garantem segurança, conforto e estilo nas suas caminhadas, treinos ou corridas.",
          ativo: true,
          id_vendedor: 202,
        },
        {
          id: 4,
          titulo: "Vestido Floral",
          preco: 59.99,
          img: "produto4.webp",
          descricao:
            "Vestido floral feminino com estampa delicada e colorida, tecido leve e toque macio. Possui caimento soltinho, alças finas reguláveis, decote em V e barra levemente rodada. Perfeito para dias quentes, festas ao ar livre ou eventos durante o verão. Um look fresco, romântico e versátil.",
          ativo: true,
          id_vendedor: 201,
        },
        {
          id: 5,
          titulo: "Jaqueta de Couro",
          preco: 120.0,
          img: "produto5.jpg",
          descricao:
            "Jaqueta de couro legítimo com design sofisticado, forro térmico interno para manter o corpo aquecido, zíper frontal robusto, bolsos funcionais laterais e peito com botão. Gola alta ajustável e acabamento premium fazem dela uma peça-chave para os dias mais frios, combinando elegância com atitude urbana.",
          ativo: false,
          id_vendedor: 203,
        },
        {
          id: 6,
          titulo: "Calça Skinny",
          preco: 55.0,
          img: "produto6.webp",
          descricao:
            "Calça jeans skinny confeccionada com tecido de algodão e elastano, proporcionando ajuste perfeito ao corpo e total liberdade de movimento. Cintura média, bolsos funcionais e costuras reforçadas para maior durabilidade. Ideal para compor looks modernos e despojados, seja no dia a dia ou à noite.",
          ativo: true,
          id_vendedor: 200,
        },
        {
          id: 7,
          titulo: "Blusa de Tricô",
          preco: 35.75,
          img: "produto7.jpg",
          descricao:
            "Blusa de tricô feminina com toque macio e textura aconchegante. Gola redonda clássica, acabamento canelado nas mangas e barra, modelagem confortável que veste bem todos os tipos de corpo. Ideal para os dias frios, podendo ser usada sozinha ou com sobreposições em visuais estilosos.",
          ativo: true,
          id_vendedor: 204,
        },
        {
          id: 8,
          titulo: "Chapéu Panamá",
          preco: 25.9,
          img: "produto8.webp",
          descricao:
            "Chapéu Panamá confeccionado em palha sintética de alta resistência, leve e confortável. Design clássico com aba média, faixa decorativa e ótima ventilação, ideal para proteção contra o sol com muito estilo. Perfeito para compor looks de verão em eventos ao ar livre, praias ou passeios urbanos.",
          ativo: true,
          id_vendedor: 202,
        },
        {
          id: 9,
          titulo: "Óculos de Sol",
          preco: 45.0,
          img: "produto9.jpeg",
          descricao:
            "Óculos de sol com lentes escuras e proteção UV400, garantindo segurança contra raios solares prejudiciais. Armação resistente, leve e com design contemporâneo que combina com diferentes estilos e formatos de rosto. Acompanha estojo rígido, flanela de limpeza e é ideal para uso diário ou viagens.",
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
