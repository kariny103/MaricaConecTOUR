// Pontos do mapa da página inicial.
// As coordenadas são aproximadas: confira e ajuste no Google Maps
// (clique com o botão direito no local > copie a latitude e a longitude).

export const TIPOS_MAPA = {
  praia: { rotulo: 'Praias', icone: 'fa-umbrella-beach', cor: '#00A9A5' },
  restaurante: { rotulo: 'Restaurantes', icone: 'fa-utensils', cor: '#FF8A24' },
  trilha: { rotulo: 'Trilhas', icone: 'fa-person-hiking', cor: '#2F7D5B' },
  turistico: { rotulo: 'Pontos turísticos', icone: 'fa-landmark', cor: '#123B5D' },
  hospedagem: { rotulo: 'Hospedagem', icone: 'fa-bed', cor: '#9A7446' },
}

export const CENTRO_MAPA = [-22.935, -42.85]

export const pontos = [
  // Praias
  { tipo: 'praia', nome: 'Praia de Itaipuaçu', lat: -22.9705, lng: -43.0100, slug: 'praia-de-itaipuacu' },
  { tipo: 'praia', nome: 'Praia da Barra de Maricá', lat: -22.9630, lng: -42.8300, slug: 'restinga-da-barra' },
  { tipo: 'praia', nome: 'Praia de Ponta Negra', lat: -22.9585, lng: -42.6960, slug: 'farol-de-ponta-negra' },
  { tipo: 'praia', nome: 'Praia de Jaconé', lat: -22.9380, lng: -42.6500, slug: 'praia-de-jacone' },

  // Trilhas
  { tipo: 'trilha', nome: 'Pedra do Elefante (Serra da Tiririca)', lat: -22.9480, lng: -43.0280, slug: 'pedra-do-elefante' },
  { tipo: 'trilha', nome: 'Cachoeiras do Espraiado', lat: -22.8850, lng: -42.7050, slug: 'espraiado' },

  // Pontos turísticos
  { tipo: 'turistico', nome: 'Centro Histórico e Igreja Matriz', lat: -22.9190, lng: -42.8190, slug: 'centro-historico' },
  { tipo: 'turistico', nome: 'Lagoa de Maricá', lat: -22.9330, lng: -42.8500, slug: 'lagoa-de-marica' },
  { tipo: 'turistico', nome: 'Farol de Ponta Negra', lat: -22.9615, lng: -42.6905, slug: 'farol-de-ponta-negra' },
  { tipo: 'turistico', nome: 'Restinga de Maricá (APA)', lat: -22.9650, lng: -42.8700, slug: 'restinga-da-barra' },

  // Restaurantes (regiões com mais opções)
  { tipo: 'restaurante', nome: 'Quiosques e restaurantes da orla de Itaipuaçu', lat: -22.9690, lng: -42.9950 },
  { tipo: 'restaurante', nome: 'Frutos do mar em Ponta Negra', lat: -22.9560, lng: -42.7000 },
  { tipo: 'restaurante', nome: 'Restaurantes do Centro', lat: -22.9170, lng: -42.8225 },

  // Hospedagem (regiões com pousadas e hotéis)
  { tipo: 'hospedagem', nome: 'Pousadas em Ponta Negra', lat: -22.9530, lng: -42.7080 },
  { tipo: 'hospedagem', nome: 'Hotéis e pousadas no Centro', lat: -22.9215, lng: -42.8140 },
  { tipo: 'hospedagem', nome: 'Pousadas em Itaipuaçu', lat: -22.9640, lng: -42.9800 },
]
