import Itaipuacu from '../assets/itaipuacu.jpg'
import Lagoa from '../assets/lagoa.jpg'
import Serra from '../assets/serra.jpg'

export const CATEGORIAS = ['Praia', 'Natureza', 'Cidade', 'Descanso']

export const REGIOES = ['Centro', 'Itaipuaçu', 'Ponta Negra', 'Barra de Maricá', 'Espraiado']

// Destinos que não têm foto usam um fundo em degradê com o ícone
export const destinos = [
  {
    slug: 'praia-de-itaipuacu',
    nome: 'Praia de Itaipuaçu',
    regiao: 'Itaipuaçu',
    categorias: ['Praia', 'Descanso'],
    imagem: Itaipuacu,
    icone: 'fa-umbrella-beach',
    preco: 199,
    duracao: 'Passeio de 1 dia',
    destaque: true,
    resumo: 'Orla extensa com vista para a Pedra do Elefante e um dos pores do sol mais bonitos da região.',
    descricao:
      'Itaipuaçu tem uma das orlas mais longas de Maricá, com calçadão, quiosques e ciclovia. O mar é aberto e as ondas costumam ser fortes, o que atrai surfistas e pescadores. No fim da tarde, o sol se põe atrás da Pedra do Elefante e da Serra da Tiririca, e a praia enche de gente para ver.',
    dicas: [
      'Mar de tombo e ondas fortes: tome banho só perto dos postos de salva-vidas.',
      'Chegue antes das 17h para pegar um bom lugar para o pôr do sol.',
      'O calçadão é ótimo para caminhada e bicicleta.',
    ],
    comoChegar: 'Pela RJ-106 (Rodovia Amaral Peixoto) ou pela Estrada de Itaipuaçu, vindo de Niterói.',
  },
  {
    slug: 'lagoa-de-marica',
    nome: 'Lagoa de Maricá',
    regiao: 'Centro',
    categorias: ['Natureza', 'Descanso'],
    imagem: Lagoa,
    icone: 'fa-water',
    preco: 299,
    duracao: 'Passeio de 1 dia',
    destaque: true,
    resumo: 'Passeio pela maior lagoa do município, com pesca artesanal e fim de tarde tranquilo.',
    descricao:
      'A Lagoa de Maricá faz parte de um sistema de lagoas que corta o município e marca a paisagem da cidade. Às margens, é comum ver pescadores artesanais, garças e biguás. É um bom lugar para caminhar, andar de caiaque ou só sentar e ver o dia acabar.',
    dicas: [
      'Leve repelente para o fim da tarde.',
      'Pergunte aos pescadores locais sobre passeios de barco.',
      'Combine com uma visita ao Centro Histórico, que fica perto.',
    ],
    comoChegar: 'Fica próxima ao Centro de Maricá, com acesso pela orla da lagoa.',
  },
  {
    slug: 'pedra-do-elefante',
    nome: 'Pedra do Elefante',
    regiao: 'Itaipuaçu',
    categorias: ['Natureza'],
    imagem: Serra,
    icone: 'fa-mountain',
    preco: 399,
    duracao: 'Trilha de meio dia',
    destaque: true,
    resumo: 'Trilha na Serra da Tiririca com vista panorâmica de Itaipuaçu até o Rio de Janeiro.',
    descricao:
      'A Pedra do Elefante fica dentro do Parque Estadual da Serra da Tiririca, na divisa entre Maricá e Niterói. A subida é íngreme em alguns trechos, mas lá de cima dá para ver a orla de Itaipuaçu, as lagoas e, em dias limpos, o Rio de Janeiro. É a trilha mais procurada da cidade.',
    dicas: [
      'Nível moderado: vá de tênis com boa aderência e leve bastante água.',
      'Comece cedo para evitar o sol forte do meio do dia.',
      'Recomendamos fazer a trilha com guia, principalmente na primeira vez.',
    ],
    comoChegar: 'A trilha começa em Itaipuaçu, próximo à Serra da Tiririca.',
  },
  {
    slug: 'farol-de-ponta-negra',
    nome: 'Praia e Farol de Ponta Negra',
    regiao: 'Ponta Negra',
    categorias: ['Praia', 'Natureza'],
    icone: 'fa-tower-observation',
    preco: 149,
    duracao: 'Passeio de 1 dia',
    destaque: true,
    resumo: 'Praia de águas claras e o farol no alto do morro, com um dos mirantes mais bonitos da costa.',
    descricao:
      'Ponta Negra junta praia, canal e morro no mesmo lugar. Uma subida curta leva ao farol, de onde se vê o mar aberto de um lado e a lagoa do outro. A praia tem trechos de água mais calma, perto do canal, e é boa para passar o dia.',
    dicas: [
      'A subida ao farol é curta, mas leve água e protetor.',
      'O canal é um bom ponto para fotos no fim da tarde.',
      'Há restaurantes de frutos do mar na região.',
    ],
    comoChegar: 'Pela RJ-106, seguindo as placas para Ponta Negra.',
  },
  {
    slug: 'praia-de-jacone',
    nome: 'Praia de Jaconé',
    regiao: 'Ponta Negra',
    categorias: ['Praia'],
    icone: 'fa-person-swimming',
    preco: 129,
    duracao: 'Passeio de 1 dia',
    resumo: 'Praia de surfe na divisa com Saquarema, com formações rochosas descritas por Charles Darwin.',
    descricao:
      'Jaconé fica no limite de Maricá com Saquarema. As ondas fortes fazem dela um point de surfe, e as rochas de praia (beachrocks) da orla chamaram a atenção de Charles Darwin quando ele passou pela região em 1832. É uma praia mais vazia, boa para quem quer sossego.',
    dicas: [
      'Mar forte: evite entrar na água se não souber nadar bem.',
      'Leve lanche e água, pois há poucos quiosques.',
    ],
    comoChegar: 'Pela RJ-106, passando por Ponta Negra em direção a Saquarema.',
  },
  {
    slug: 'restinga-da-barra',
    nome: 'Restinga e Praia da Barra de Maricá',
    regiao: 'Barra de Maricá',
    categorias: ['Praia', 'Natureza'],
    icone: 'fa-leaf',
    preco: 159,
    duracao: 'Passeio de meio dia',
    resumo: 'Área de proteção ambiental com vegetação de restinga preservada entre o mar e a lagoa.',
    descricao:
      'A restinga de Maricá é uma das mais preservadas do estado e faz parte de uma Área de Proteção Ambiental. Entre a lagoa e o mar, há dunas, bromélias, cactos e aves que vivem só nesse tipo de ambiente. A Praia da Barra fica ao lado e é ótima para caminhadas longas na areia.',
    dicas: [
      'Não saia das trilhas marcadas: a vegetação é frágil.',
      'Bom lugar para observar aves de manhã cedo.',
    ],
    comoChegar: 'Pelo bairro de Barra de Maricá, a partir do Centro.',
  },
  {
    slug: 'centro-historico',
    nome: 'Centro Histórico de Maricá',
    regiao: 'Centro',
    categorias: ['Cidade'],
    icone: 'fa-church',
    preco: 89,
    duracao: 'Passeio de 3 horas',
    resumo: 'Igreja Matriz de Nossa Senhora do Amparo, praças e a história da cidade a pé.',
    descricao:
      'O Centro concentra a história de Maricá. A Igreja Matriz de Nossa Senhora do Amparo, padroeira da cidade, fica em frente à praça principal, cercada de casarões, comércio e feiras. É um passeio a pé, bom para conhecer a cidade com calma e provar a comida local.',
    dicas: [
      'Aos fins de semana costuma haver feiras e eventos na praça.',
      'Maricá tem ônibus municipais gratuitos (os "vermelhinhos") que passam pelo Centro.',
    ],
    comoChegar: 'O Centro é o ponto de partida dos ônibus municipais para todos os bairros.',
  },
  {
    slug: 'espraiado',
    nome: 'Cachoeiras do Espraiado',
    regiao: 'Espraiado',
    categorias: ['Natureza', 'Descanso'],
    icone: 'fa-tree',
    preco: 179,
    duracao: 'Passeio de 1 dia',
    resumo: 'Região rural com cachoeiras, sítios e trilhas no meio da Mata Atlântica.',
    descricao:
      'O Espraiado é a área rural de Maricá, com estradas de terra, sítios, produtores locais e várias cachoeiras de água fria. É o destino certo para quem quer fugir da praia, tomar banho de rio e comer comida da roça.',
    dicas: [
      'Alguns acessos são de terra: prefira carro alto em dias de chuva.',
      'Leve roupa extra e toalha para o banho de cachoeira.',
      'Compre produtos direto dos produtores locais.',
    ],
    comoChegar: 'Pela estrada que sai do Centro em direção à serra, sentido Espraiado.',
  },
]

export const getDestino = (slug) => destinos.find((d) => d.slug === slug)

export const formatarPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
