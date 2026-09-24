// Guias de exemplo. Troque pelos guias reais da equipe.
export const TIPOS_PASSEIO = ['Aventura', 'Histórico', 'Cultural', 'Gastronômico', 'Ecológico', 'Rural', 'Praia']

export const DIAS_SEMANA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

// Número de WhatsApp da agência (o mesmo do cabeçalho)
export const WHATSAPP = '5521998814926'

export const guias = [
  {
    id: 1,
    nome: 'Irineu Carvalho Souza',
    idade: 37,
    sexo: 'Masculino',
    anosExperiencia: 12,
    especialidade: 'Trilhas e Florestas',
    tipos: ['Aventura', 'Ecológico'],
    regiao: 'Itaipuaçu',
    preco: 150,
    nota: 4.9,
    avaliacoesPositivas: 99,
    dias: [0, 3, 5, 6],
    destinos: ['pedra-do-elefante', 'espraiado', 'praia-de-itaipuacu'],
    bio: 'Explore as trilhas e florestas de Maricá com quem conhece cada pedra do caminho. Irineu guia grupos na Serra da Tiririca há mais de dez anos e mostra a fauna e a flora locais no ritmo de cada pessoa, de iniciantes a aventureiros experientes.',
  },
  {
    id: 2,
    nome: 'Luana Ferreira Lima',
    idade: 29,
    sexo: 'Feminino',
    anosExperiencia: 6,
    especialidade: 'História e Cultura de Maricá',
    tipos: ['Histórico', 'Cultural'],
    regiao: 'Centro',
    preco: 90,
    nota: 4.8,
    avaliacoesPositivas: 97,
    dias: [1, 2, 3, 4, 5],
    destinos: ['centro-historico', 'lagoa-de-marica'],
    bio: 'Historiadora nascida em Maricá, Luana conduz passeios a pé pelo Centro contando a história da cidade, das igrejas e das famílias de pescadores que formaram o município.',
  },
  {
    id: 3,
    nome: 'Carlos Eduardo Menezes',
    idade: 45,
    sexo: 'Masculino',
    anosExperiencia: 20,
    especialidade: 'Lagoas e Pesca Artesanal',
    tipos: ['Ecológico', 'Gastronômico'],
    regiao: 'Barra de Maricá',
    preco: 120,
    nota: 4.7,
    avaliacoesPositivas: 95,
    dias: [0, 4, 5, 6],
    destinos: ['lagoa-de-marica', 'restinga-da-barra'],
    bio: 'Filho de pescador, Carlos leva os visitantes pelas lagoas e pela restinga, mostra como funciona a pesca artesanal e termina o passeio com uma parada para provar o peixe da região.',
  },
  {
    id: 4,
    nome: 'Beatriz Santos Rocha',
    idade: 33,
    sexo: 'Feminino',
    anosExperiencia: 8,
    especialidade: 'Praias e Surfe',
    tipos: ['Praia', 'Aventura'],
    regiao: 'Ponta Negra',
    preco: 110,
    nota: 4.9,
    avaliacoesPositivas: 98,
    dias: [0, 1, 5, 6],
    destinos: ['farol-de-ponta-negra', 'praia-de-jacone', 'praia-de-itaipuacu'],
    bio: 'Surfista e salva-vidas certificada, Beatriz apresenta as praias de Ponta Negra e Jaconé, com dicas de segurança no mar e subida ao farol para ver o pôr do sol.',
  },
  {
    id: 5,
    nome: 'João Pedro Almeida',
    idade: 41,
    sexo: 'Masculino',
    anosExperiencia: 10,
    especialidade: 'Turismo Rural e Cachoeiras',
    tipos: ['Rural', 'Ecológico', 'Gastronômico'],
    regiao: 'Espraiado',
    preco: 130,
    nota: 4.6,
    avaliacoesPositivas: 94,
    dias: [0, 2, 6],
    destinos: ['espraiado'],
    bio: 'Morador do Espraiado, João Pedro leva grupos às cachoeiras e aos sítios da região, com parada para almoço de comida da roça feita por produtores locais.',
  },
]

export const getGuia = (id) => guias.find((g) => g.id === Number(id))

export const iniciais = (nome) =>
  nome.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase()

export const linkWhatsApp = (mensagem) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`
